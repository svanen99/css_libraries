'use client'
import styled from 'styled-components'

type CardsProps = {
    title: string,
    content: string,
    color: string,
    active?: boolean,
    image?: string
}

const StyledImage = styled.img<{ active?: boolean }> `
    width: clamp(250px, 24vw, 400px);
    margin: auto;
    border-radius: 10px;
    display: block;
    margin-bottom: 16px;
    transition: width 0.4s ease;

    @media (max-width: 1200px) {
        width: clamp(220px, 28vw, 350px); 
    }

    @media (max-width: 1000px) {
        width: clamp(200px, 40vw, 320px); 
    }

    @media (max-width: 768px) {
        width: clamp(180px, 55vw, 300px); 
    }

    @media (max-width: 550px) {
        width: clamp(160px, 70vw, 280px);
        margin-bottom: 25px;
    }

    ${props => props.active && `
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    `}
`

const StyledCards = styled.div<{ color: string; active?: boolean }>`
    border-radius: 10px;
    background-color: #fdf2f9;
    box-sizing: border-box;
    border: 10px solid #c6e0ff;
    color: ${props => props.color};
    padding: 20px;
    margin: 20px auto;
    max-width: 1200px;
    text-align: center;

    h4 {
        font-size: 24px;
    }

    p {
        font-size: 22px;
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        h4 {
            font-size: 22px;
        }
        p {
            font-size: 20px;
        }
    }

    @media (max-width: 430px) {
        padding: 5px;
        h4 {
            font-size: 20px;
        }
        p {
            font-size: 22px;
        }
    }
`;
const Cards = ({ title, content, color, active, image }: CardsProps) => {
    return (
        <StyledCards color={color} active={active}>
            <p>{content}</p>
            {image && <StyledImage src={image} alt={title} active={active} />}
        </StyledCards>
    );
};
export default Cards;