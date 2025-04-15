import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { client } from '../utils/awsClient';
//import { has } from 'lodash';

export default function Register() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirm, setConfirm] = useState('');
const [error, setError] = useState('');

const navigate = useNavigate();
// passowrd : 1 number, 1 symbol, 1 uppercase, 1 lowercase, 8 characters

const validatePassword = (password) => {
    let hasNumber = false 
    let hasUppercase = false
    let hasLowercase = false
    let hasSpecialChar = false
    
    const specialChars = "! @ # $ % & * , . ? : ";

    for ( let i=0; i < password.length; i++){
        const char = password[i];
        if (char >= 0 && char <= 9) hasNumber = true;
        if (char >= 'A' && char <= 'Z') hasUppercase = true;
        if (char >= 'a' && char <= 'z') hasLowercase = true;
        if (specialChars.includes(char)) hasSpecialChar = true;
    }
     if (!hasNumber || !hasUppercase || !hasLowercase || !hasSpecialChar) {
        return false;
     }
        return true;
    }
const handleRegister = async () => {
if (password !== confirm) {
    setError('Passwords do not match');
    return;
}
if(!validatePassword(password)){
    setError('Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character, and be at least 8 characters long');
    return;
}

const command = new PutItemCommand({
    TableName: 'Users',
    Item: {
        UserName: {S: username}, 
        password: {S: password}
    },
});

       try{
        await client.send(command);
        navigate('/login');

       }catch (error){
        setError("Error registering user: ", error);
}

};
  
return (
    <div>
        <h2>Create Your Holy Moly Account</h2>
        <input  type="text" placeholder="Enter username..." onChange ={(e) => setUsername(e.target.value)}/>   
        <input  type="password" placeholder="Enter your password..." onChange ={(e) =>setPassword(e.target.value)}/>
        <input  type="password" placeholder="Confirm your password..." onChange ={(e) =>setConfirm(e.target.value)}/>
        <button onClick={handleRegister}>Lets Create An Account!</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
    </div>

)


}

