import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../About';
import '@testing-library/jest-dom';

describe('About component', () => {
    test('render "Show More" button initially', () => {
        render(<About />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent("Show More");
    });

    test('shows extra paragraph when "Show More" is clicked', () => {
        render(<About />);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText("If you see this secret message, you get a free donut!")).toBeInTheDocument();
        expect(button).toHaveTextContent("Show Less");
    });
    test('hides extra paragraph when "Show Less" is clicked', () => {
        render(<About />);
        const button = screen.getByRole('button');
        fireEvent.click(button); //to get the show more button 
        fireEvent.click(button); //to get the show less button
        //expect(screen.getByText("If you see this secret message, you get a free donut!")).not.toBeInTheDocument();
        expect(button).toHaveTextContent("Show More");
    });
});






