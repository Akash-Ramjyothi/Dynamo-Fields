// jest-dom extends Jest with custom DOM matchers for better assertions
// Docs: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';

// Optional: global test setup can go here

// Example: mock window.matchMedia (useful for UI libraries like MUI)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Example: mock scrollTo (commonly missing in jsdom)
window.scrollTo = jest.fn();

// Reset mocks after each test for isolation
afterEach(() => {
  jest.clearAllMocks();
});
