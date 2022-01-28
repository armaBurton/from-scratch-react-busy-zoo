import { render, screen } from '@testing-library/react';
import App from './App';

test('SpAgHeTtI mOnStAr', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpAgHeTtI mOnStAr/i);
  expect(linkElement).toBeInTheDocument();
});
