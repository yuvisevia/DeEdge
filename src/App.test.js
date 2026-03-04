// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiNebula title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiNebula/i);
    expect(titleElement).toBeInTheDocument();
});
