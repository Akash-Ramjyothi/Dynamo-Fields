import React, { useId, useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({
  id,
  label = "Toggle Switch",
  defaultChecked = false,
  disabled = false,
  onToggle,
}) {
  const generatedId = useId();

  const switchId = id || `toggle-${generatedId}`;

  const [isToggled, setIsToggled] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;

    const updatedState = !isToggled;

    setIsToggled(updatedState);

    // Callback support for parent components
    if (onToggle) {
      onToggle(updatedState);
    }
  };

  return (
    <div className="toggle-wrapper">
      <label
        htmlFor={switchId}
        className={`toggle-switch ${disabled ? "disabled" : ""}`}
      >
        <input
          id={switchId}
          type="checkbox"
          role="switch"
          checked={isToggled}
          disabled={disabled}
          aria-checked={isToggled}
          aria-label={label}
          onChange={handleToggle}
        />

        <span className="switch" />

        {label && (
          <span className="toggle-label">
            {label}
          </span>
        )}
      </label>
    </div>
  );
}

export default ToggleSwitch;
