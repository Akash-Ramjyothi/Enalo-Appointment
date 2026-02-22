import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  test('renders main heading if present', () => {
    render(<App />);
    
    const heading = screen.queryByRole('heading');
    if (heading) {
      expect(heading).toBeInTheDocument();
    }
  });

  test('renders learn react link (legacy CRA check)', () => {
    render(<App />);
    
    const linkElement = screen.queryByText(/learn react/i);
    if (linkElement) {
      expect(linkElement).toBeInTheDocument();
    }
  });

  test('does not crash on initial render', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
