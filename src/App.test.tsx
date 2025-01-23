// src/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


test('renders App and increments count', () => {
  // Render component App
  render(<App />);
  
  // Kiểm tra nếu "DEMO" và "Count: 0" được hiển thị
  expect(screen.getByText(/DEMO/i)).toBeInTheDocument();
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  
  // Lấy nút "Increment" và click vào nó
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  
  // Kiểm tra nếu "Count: 1" được hiển thị sau khi click
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

