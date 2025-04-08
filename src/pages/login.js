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
        <div className="flex justify-center items-center bg-grey-100 min-h-screen">
            <h2 className="text-xl font-bold md-6 text-center ">Login To Your Holy Moly Donut Account</h2>
            <input className="w-full p-2 border border-gray-300 rounded mb-4" type="text" placeholder="Enter username..." onChange ={(e) => setUsername(e.target.value)}/>   
            <input className="w-full p-2 border border-gray-300 rounded mb-4" type="password" placeholder="Enter your password..." onChange ={(e) =>setPassword(e.target.value)}/>
            <button className=" w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleLogin}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <p>Dont have an account?<Link to="/register">Register Now!</Link></p>
        </div>
    );
}