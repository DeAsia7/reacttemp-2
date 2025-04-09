import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { client } from '../utils/awsClient';

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
    
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

    for ( let i=0; i < password.length; i++){
        const char = password[i];
        if (!isNaN(char)) {
            hasNumber = true;
        } else if (char === char.toUpperCase()) {
            hasUppercase = true;
        } else if (char === char.toLowerCase()) {
            hasLowercase = true;
        } else if (specialChars.test(char)) {
            hasSpecialChar = true;
        }
    }


















}

