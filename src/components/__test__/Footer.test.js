import React from 'react';
import {render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
test('render without crashing', () => {
render(<Footer />);
})

test('contains the correct text', () => {
render(<Footer />);
const footerText = screen.getByText(/@Copyright 2025 - DeAsia Mallory/);
expect(footerText).toBeInTheDocument();
});

test('is wrapped in a footer tag', () => {
const { container} = render(<Footer />);
const footerElement = container.querySelector('footer');
expect(footerElement).toBeInTheDocument();
});

test('has the correct tailwind class names', () => {
const { container } = render(<Footer />);
const footerElement = container.querySelector('footer');
expect(footerElement).toHaveClass('bg-purple-200 text-center py-4 text-md text-green-900');
});

});
