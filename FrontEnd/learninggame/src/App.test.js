import { render, screen } from '@testing-library/react';
import App from './Pages/App';

test('Get username on starting page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
