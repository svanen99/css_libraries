'use client'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #c6e0ff;
    border-radius: 10px;

    @media (max-width: 768px) {
        border-length: auto;
        }
`
const StyledPageTitle = styled.h1`
    font-size: 50px;
    margin: 14px;
    text-align: center;
    text-decoration: underline;
    color: #e1218b;

    @media (max-width: 768px) {
        font-size: 60px;
        }
    }
`
const Header = () => {
    return (
        <header>
            <StyledHeader>
            <StyledPageTitle>PEPZI</StyledPageTitle>
            </StyledHeader>
        </header>
    )
}
export default Header;