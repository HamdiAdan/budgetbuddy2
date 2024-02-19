import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const { getByText } = render(< App />);
    
    // Check if "Budgets" text is present
    const budgetsText = getByText('Budgets');
    expect(budgetsText).toBeInTheDocument();
    
    // Check if "Add Budget" button is present
    const addButton = getByText('Add Budget');
    expect(addButton).toBeInTheDocument();
    
    // Check if "Add Expense" button is present
    const addExpenseButton = getByText('Add Expense');
    expect(addExpenseButton).toBeInTheDocument();
  });

  test('toggles dark mode when the "Dark Mode" button is clicked', () => {
    const { getByText, container } = render(<App />);
    
    
    expect(document.body).not.toHaveClass('dark-mode');
    
    // Click on the "Dark Mode" button
    const darkModeButton = getByText('Dark Mode');
    fireEvent.click(darkModeButton);
    
    // After clicking, dark mode should be enabled
    expect(document.body).toHaveClass('dark-mode');
    
    // Click again to disable dark mode
    fireEvent.click(darkModeButton);
    expect(document.body).not.toHaveClass('dark-mode');
  });
});
