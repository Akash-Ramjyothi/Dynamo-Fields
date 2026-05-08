import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  // Render app before every test
  const setup = () => render(<App />);

  test("renders application successfully", () => {
    setup();

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders page heading", () => {
    setup();

    const heading = screen.getByRole("heading", {
      name: /json schema builder/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders add field button", () => {
    setup();

    const addButton = screen.getByRole("button", {
      name: /add field/i,
    });

    expect(addButton).toBeInTheDocument();
  });

  test("adds a new field on button click", async () => {
    setup();

    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: /add field/i,
    });

    await user.click(addButton);

    const inputFields = screen.getAllByPlaceholderText(
      /enter field label/i
    );

    expect(inputFields.length).toBeGreaterThan(0);
  });

  test("renders field type dropdown", async () => {
    setup();

    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: /add field/i,
    });

    await user.click(addButton);

    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toBeInTheDocument();
  });

  test("allows user to type in field label", async () => {
    setup();

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /add field/i,
      })
    );

    const input = screen.getByPlaceholderText(
      /enter field label/i
    );

    await user.type(input, "Username");

    expect(input).toHaveValue("Username");
  });

  test("matches snapshot", () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
