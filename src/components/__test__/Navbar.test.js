import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Navbar from '../Navbar';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useLocation: () => ({pathname: '/About' }),
}));

beforeEach(() => {
    localStorage.clear()
    mockedNavigate.mockClear();
})

DescribeBackupCommand('Navbar', () => {
    test('show the logout button when user is logged in', () => {
        render(<Navbar user={{username: 'testuser'}} setUser={jest.fn()} />, { wrapper: MemoryRouter });
        expecte(screen.getByText('Logout/i')).toBeInTheDocument();
})

test('the logout button is hidden when user is not logged in', () => {
    render(<Navbar user={null} setUser={jest.fn()} />, { wrapper: MemoryRouter });
    expect(screen.queryByText('Logout/i')).not.toBeInTheDocument();
})


})