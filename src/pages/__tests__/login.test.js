
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../login';
import { MemoryRouter } from 'react-router-dom';
import {client} from '../../utils/awsClient';

jest.mock('../../utils/awsClient', () => ({
    client:{
    send: jest.fn(),
    }
}));


const mockSetUser = jest.fn();
const mockedNvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNvigate,
    useLocation: () => ({ pathname: '/About' }),
}));

describe ('Login component', () => {
    test ('display message login failed on AWS Error', async () => {
       client.send.mockRejectedValueOnce(new Error('AWS Error'));
        render(<Login setUser={mockSetUser} />, 
            //make sure to close the MemoryRouter
            { wrapper: MemoryRouter});
            fireEvent.change(screen.getByPlaceholderText('Enter your username...'), {
                target: {value: 'DeAsia'},
        });

        fireEvent.change(screen.getByPlaceholderText('Enter your password...'), {
            target: {value: 'DeAsia19!'},
        });

        fireEvent.click(screen.getByText('Login Now'));
        await waitFor(() => {
            expect(screen.getByText(/Login failed/i)).toBeInTheDocument();
        });
        expect(mockSetUser).not.toHaveBeenCalled();
        expect(mockedNvigate).not.toHaveBeenCalled();
    });
});





