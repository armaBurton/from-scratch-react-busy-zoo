import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should add a color to the array when monster button is clicked', async () => {
  render(<App />);
  
  const greenMonsterButton = await screen.findByText(`green monster`);
  fireEvent.click(greenMonsterButton);
  
  const greenMonster = await screen.findByAltText(`green monster`);
  expect(greenMonster.src).toBe('http://localhost/green.png');

});
