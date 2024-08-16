'use client'

import { SetStateAction, useState } from 'react'
import styled from 'styled-components'

type LogInProps = {
    updateFunction: (userName: string | null) => void;
}
const StyledLogIn = styled.div`
    background: #f373c6;
    border-radius: 10px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Arial', sans-serif;

    .login-container {
        background: white;
        max-width: 400px;
        padding: 32px;
        border-radius: 24px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        
        @media (max-width: 768px) {
            max-width: 70%;
            }
    }

    h2 {
        font-size: 28px;
        color: #d9298d;
        margin-bottom: 24px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    h4 {
        color: #fbcfed;
        font-weight: 400;
    }

    input {
        padding: 14px;
        margin: 12px 0;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        outline: none;
        color: #ff66a6;
        @media (max-width: 768px) {
            max-width: 70%;
            }
        &:focus {
            border-color: #f78ca0;
            box-shadow: 0 0 8px rgba(247, 140, 160, 0.5);
        }
    }

    button {
        background-color: #fbcfed;
        width: 100%;
        border-radius: 8px;
        margin-top: 24px;
        border-color: #ff66a6;
        padding: 16px;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.3s;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        
        &:hover {
            background: #ff478e;
            color: #fff;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(247, 140, 160, 0.5);
        }
    }
`;

const LogIn = ({ updateFunction }: LogInProps) => {
    const [enteredUserName, setEnteredUserName] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredUserName(event.target.value);
        console.log(event.target.value);
    }
    
    const handleClick = () => {
        updateFunction(enteredUserName);
        localStorage.setItem("savedUserName", JSON.stringify(enteredUserName));
    }

    return (
        <StyledLogIn>
            <div className='login-container'>
                <h2>To see pics of my cat, you gotta log in!</h2>
                <h4>I dont make the rules</h4>
                <input onChange={handleChange} placeholder='Enter your password' />
                <button onClick={handleClick}>VAMOS!</button>
            </div>
        </StyledLogIn>
    )
}
export default LogIn;