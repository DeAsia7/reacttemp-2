
import React from 'react';
import ColorChange from '../Colorchange';
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';


jest.useFakeTimers();

describe('ColorChange Page', () => {

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('renders with inital red background', () => {
       render(<ColorChange />);
       const title  = screen.getByText(/background color: red/i);
       expect(title).toBeInTheDocument();

       const container = title.closest('div');
         expect(container).toHaveStyle('background-color: red');

        // expect(container).toHaveClass('bg-red-500');
 
    });

    test('changes color to blue after 3 seconds', () => {
        render(<ColorChange />);
        act(() => {
            jest.advanceTimersByTime(3000);
        })
        const title = screen.getByText(/background color: blue/i);
        expect(title).toBeInTheDocument();

        const container = title.closest('div');
        expect(container).toHaveStyle('background-color: blue');
    })

   test('changes back to red after another 3 seconds', () => {
        render(<ColorChange />);
        
        act(() => {
            jest.advanceTimersByTime(3000);
        }
        )
        const title = screen.getByText(/background color: red/i);
        expect(title).toBeInTheDocument();

        const container = title.closest('div');
        expect(container).toHaveStyle('background-color: red');
    })


    test('changes color to blue after 3 seconds', () => {
        render(<ColorChange />);
        act(() => {
            jest.advanceTimersByTime(3000);
        })
        const title = screen.getByText(/background color: blue/i);
        expect(title).toBeInTheDocument();

        const container = title.closest('div');
        expect(container).toHaveStyle('background-color: blue');
    })
});

    
    