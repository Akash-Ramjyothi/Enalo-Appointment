/**
 * Global Test Setup File
 * ----------------------
 * This file is automatically executed before running Jest tests.
 * It extends Jest with custom DOM matchers from Testing Library
 * and can be used to configure global mocks or test utilities.
 *
 * Docs:
 * https://github.com/testing-library/jest-dom
 */

// Extend Jest with DOM-specific assertions
import '@testing-library/jest-dom';

// Optional: Mock browser APIs if needed globally
// Example: matchMedia mock (useful for Ant Design components)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Optional: Silence unnecessary warnings in test environment
// jest.spyOn(console, 'error').mockImplementation(() => {});
// jest.spyOn(console, 'warn').mockImplementation(() => {});

// Example custom global utility (extend as needed)
// globalThis.IS_REACT_ACT_ENVIRONMENT = true;
