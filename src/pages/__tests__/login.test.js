
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../login';
import { MemoryRouter } from 'react-router-dom';


const mockedNvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNvigate,
    useLocation: () => ({ pathname: '/About' }),
}));

describe ('Login component', () => {
    test ('display message login failed on AWS Error', async () => {
        client.send.mockRejectionValueOnce(new Error('AWS Error'));
        render(<Login setUser={mockSetUser} />, 
            { wrapper: MemoryRouter,
            fireEvent.change(screen.getByPlaceholderText('username'), {
                target: {value: 'DeAsia'},
        })

        fireEvent.change(screen.getByPlaceholderText('password'), {
            target: {value: 'DeAsia19!'},
        })

        fireEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(screen.getByText('Login failed')).toBeInTheDocument();
        })
    })
})
})




