'use client'

import styled from 'styled-components'

const StyledButton = styled.button`
    background: #ffcefa;
    color: #fff;
    display: flex;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 1%;
    margin-top: 1%;
    
    @media (max-width: 430px) {
        margin-top: 70px;
    }

    a {
        padding: 16px;
        font-size: 28px;
        color: #f646d9;
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: hotpink;
            color: white;
            border-radius: 10px;
        }
    }

    @media (max-width: 768px) {
        a {
            font-size: 28px;
            padding: 12px;
            margin: 10px;
        }
    }
`
const Button = () => {
    return (
        <StyledButton>
            <a href='www.google.com'>cuteness</a>
        </StyledButton>
    )
}
export default Button;