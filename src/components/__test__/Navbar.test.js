
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Navbar from '../Navbar';
import { MemoryRouter, useLocation } from 'react-router-dom';


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

describe('Navbar', () => {
    test('show the logout button when user is logged in', () => {
        render(<Navbar user={{username: 'DeAsia'}} setUser={jest.fn()} />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Logout/i)).toBeInTheDocument();
})

test('the logout button is hidden when user is not logged in', () => {
    render(<Navbar user={null} setUser={jest.fn()} />, { wrapper: MemoryRouter });
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
})
test('logout button clears user and navigates to login', () => {
    localStorage.setItem('loggedUsser', 'DeAsia');
    const mockSetUser = jest.fn();

    render(<Navbar user={{username:'DeAsia'}} setUser={mockSetUser} />, { wrapper: MemoryRouter });
    const logoutBtn = screen.getByText(/Logout/i);

fireEvent.click(logoutBtn);

expect(mockSetUser).toHaveBeenCalledWith(null);
expect(localStorage.getItem('loggedUser')).toBeNull();
expect(mockedNavigate).toHaveBeenCalledWith('/login');

});

});