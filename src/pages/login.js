import React,  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { client} from '../utils/awsClient';

export default function Login({setUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async() => {
        const command = new GetItemCommand({
            TableName: 'Users',
            Key: {
                'username': {S: username}
            }
        });
        try {
            const response = await client.send(command);
            const user = response.Item;

            if(!user){
                setError('User not found');
                return;
            }

            if(user.password.S !== password) {
                setError('Incorrect password');
                return;
            }

            setUser({username});
            navigate('/Home');
        } catch (error){
        setError("Login Fialed ", error);
        }
        
    };

    return (
        <div>
            <h2>Login To Your Holy Moly Donut Account</h2>
            <input type="text" placeholder="Enter username..." onChange ={(e) => setUsername(e.target.value)}/>   
            <input type="password" placeholder="Enter your password..." onChange ={(e) =>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <p>Dont have an account?<Link to="/regsiter">Register Now!</Link></p>
        </div>
    );
}