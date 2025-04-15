import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../Register';
import '@testing-library/react'
import {client} from '../../utils/awsClient';
import {MemoryRouter} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
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

    test('show error if password is weak', async () => {
        render(<Register />, { wrapper: MemoryRouter });

        fireEvent.change(screen.getByPlaceholderText('/Enter username/i'), {
            target: { value: 'testuser' },
        });

        fireEvent.change(screen.getByPlaceholderText('/Enter password/i'), {
            target: { value: '12345' },
        });

        fireEvent.change(screen.getByPlaceholderText('/Confirm password/i'), {
            target: { value: '12345' },
        });

        fireEvent.click(screen.getByText(/Register/i));

        expect(
            await screen.findByText(/Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character, and be at least 8 characters long/i)).toBeInTheDocument();
        expect(client.send).not.toHaveBeenCalled();

});
})