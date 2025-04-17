import React,  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { client} from '../utils/awsClient';


function Login({setUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        const command = new GetItemCommand({
            TableName: 'Users',
            Key: {
                username: {S: username}

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
            localStorage.setItem('loggeduser', JSON.stringify({username}))
        
            navigate('/Home');
        } catch (error){
        setError("Login Failed Try again", error);
        }
        
    };

    return (
        <div>
    
            <h2 className="text-xl font-bold md-6 text-center ">Login To Your Holy Moly Donut Account</h2>
            <input className=" p-2 border border-gray-300 rounded mb-4" type="text" placeholder="Enter your username..." onChange ={(e) => setUsername(e.target.value)}/> 
            <br></br>  
            <input className=" p-2 border border-gray-300 rounded mb-4" type="password" placeholder="Enter your password..." onChange ={(e) =>setPassword(e.target.value)}/>
            <br></br>
            <button className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={handleLogin}>Login Now</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <h1 className="text-xl font-bold md-6 text-center" >Dont have a Holy Moly account?</h1>
           <button className="bg-indigo-900 text-white p-2 rounded hover:bg-yellow-400"><Link to="/Register">Lets Create An Account!</Link></button>
        </div>
        
    );
}
export default Login;