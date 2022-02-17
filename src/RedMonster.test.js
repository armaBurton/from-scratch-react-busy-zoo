import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('gets red.png if red monster button is clicked', async () => {
  render(<App />);
  const redMonsterButton = screen.getByText('red monster');

  fireEvent.click(redMonsterButton);
  const redMonsterElement = screen.getByAltText(/red monster/i);
  expect(redMonsterElement).toBeInTheDocument();
});
