import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../Register';
import '@testing-library/react'
import {client} from '../../utils/awsClient';
import {MemoryRouter} from 'react-router-dom';

jest.mock('../../utils/awsClient', () => ({
    client: {
        send: jest.fn(),
    },
}));


const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}));

describe('Register component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
});

    test('show error if password is weak', async () => {
        render(<Register />, { wrapper: MemoryRouter });

        fireEvent.change(screen.getByPlaceholderText('/Enter username/i'), {
            target: { value: 'DeAsia' },
        });

        fireEvent.change(screen.getByPlaceholderText('/Enter password/i'), {
            target: { value: '12345' },
        });

        fireEvent.change(screen.getByPlaceholderText('/Confirm password/i'), {
            target: { value: '12345' },
        });

        fireEvent.click(screen.getByText(/Lets Create An Account!/i));

        expect(
            await screen.findByText(/Password must contain at least 1 number/i)).toBeInTheDocument();
        expect(client.send).not.toHaveBeenCalled();

});
test('succesful registration and send request to DynamoDB and navigate', async () => {
    client.send.mockResolvedValueOnce({});

    render(<Register />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByPlaceholderText('/Enter username/i'), {
        target: { value: 'DeAsia' },
    });

    fireEvent.change(screen.getByPlaceholderText('/Enter password/i'), {
        target: { value: 'DeAsia19!' },
    });

     fireEvent.change(screen.getByPlaceholderText('/Confirm password/i'), {
    target: { value: 'DeAsia19!' },
});
    fireEvent.click(screen.getByText(/Lets Create An Account!/i));


    await waitFor(() => {
    expect(client.send).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith('/login');
});

});