/*
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../login';
import { MemoryRouter } from 'react-router-dom';


const mockedNvigate = jest.fn();

jest.mocmk('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNvigate,
    useLocation: () => ({ pathname: '/About' }),
}));

describe ('Login component', () => {
    test ('display message login failed on AWS Error', async () => {
        client.sendmockRejectionValueOnce(new Error('AWS Error'));
        render(<Login setUser={mockSetUser} />, {
            wrapper: MemoryRouter,
            fireEvent.change(screen.getByPlaceholderText('Username'), {
                target: {value: 'DeAsia'},
        })

        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: {value: '12345'},
        })

        fireEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(screen.getByText('Login failed')).toBeInTheDocument();
        })
    })
})
})
*/



