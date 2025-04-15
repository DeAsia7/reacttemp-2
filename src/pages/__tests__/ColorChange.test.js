
import React from 'react';
import ColorChange from '../Colorchange';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';


jest.useFakeTimers();

describe('ColorChange Page', () => {

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('renders with inital red background', () => {
       render(<ColorChange />);
       const title  = screen.getByText('background color: red/i');
       expect(title).toBeInTheDocument();

       const container = title.closest('div');
         expect(container).toHaveClass('bg-red-500');

    });

    test('changes color to blue after 5 seconds', () => {
        render(<ColorChange />);
        act(() => {
            jest.advanceTimersByTime(3000);
        })
        const title = screen.getByText(/background color: blue/i);
        expect(title).toBeInTheDocument();

        const container = title.closest('div');
        expect(container).toHaveClass('bg-blue-500');
    })

    test('changes back to red after another 3 seconds', () => {
    })

    })
    