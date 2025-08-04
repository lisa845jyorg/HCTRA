import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const headerElement = screen.getByText(/HCTRA Toll Expense Tracker/i);
  expect(headerElement).toBeInTheDocument();
});
