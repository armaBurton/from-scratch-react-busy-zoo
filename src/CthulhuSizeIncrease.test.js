import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Cthulhu size should increase when the Make Stronger button is clicked', async () => {
  render(<App />);
  const cthulhuSizeIncreaseButton = screen.getByText('Make Stronger');

  fireEvent.click(cthulhuSizeIncreaseButton);
  fireEvent.click(cthulhuSizeIncreaseButton);

  const sizeElement = await screen.findByAltText(/cthulhu/i);
  expect(sizeElement.style.width).toBe(`60px`);
});
