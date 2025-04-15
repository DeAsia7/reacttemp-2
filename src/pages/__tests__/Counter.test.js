import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';


describe('Counter Component', () => {
    test(' renders with initial count of', () => {
        render(<Counter />);
        const heading = screen.getByText("Count: 0");
        expect(heading).toBeInTheDocument();
    });
    test('increments count when Add One! button is clicked', () => {
        render(<Counter />);
        const addButton = screen.getByText('Add One!');
        fireEvent.click(addButton);
        const heading = screen.getByText("/Count: 1/i");
        expect(heading).toBeInTheDocument();
    });
    test('decrements count when Subtract one! button is clicked', () => {
        render(<Counter />);
        const subtractButton = screen.getByText('Subtract one!');
        fireEvent.click(subtractButton);
       const heading = screen.getByText("/Count: 1/i");
        expect(heading).toBeInTheDocument();
    });

});

