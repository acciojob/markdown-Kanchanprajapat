import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders markdown text', () => {
  render(<App />);
  
  // Check for the initial markdown content
  const markdownText = screen.getByText(/Markdown Previewer/i);
  expect(markdownText).toBeInTheDocument();
});
