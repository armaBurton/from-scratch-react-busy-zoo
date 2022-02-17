import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('', async () => {
  render(<App/>);

  const IsClosedButton = screen.getByTitle(`closed-button`);

  fireEvent.click(IsClosedButton);
  
  const closedSign = await screen.findByTitle('closed');
  expect(closedSign).toHaveClass('closed on glow-red');


});
