import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();

// });

// custom unit testing................................

test('test render App', () => {
  const testContainer = document.createElement('div')
  testContainer.id = 'react_app_test'
  document.body.appendChild(testContainer)
  render(<App />, testContainer) // render test
  testContainer.remove() // safe remove
})
