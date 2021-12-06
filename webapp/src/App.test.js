import { render, screen } from '@testing-library/react';
import App from './App';


test('renders NavBar and include Home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});

test('renders NavBar and include About Us', () => {
  render(<App />);
  const linkElement = screen.getByText(/About Us/);
  expect(linkElement).toBeInTheDocument();
});

test('renders App and Check on Graph', () => {
  render(<App />);
  const linkElement = screen.getByText(/Languages/);
  expect(linkElement).toBeInTheDocument();
});