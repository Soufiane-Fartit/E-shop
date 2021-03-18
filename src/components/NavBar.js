import React from 'react'
import styled from 'styled-components'


const StyledNav = styled.div`
    background: #282c34;
    display: flex;
    min-height: 70px;
`;

const StyledH1 = styled.h1`
    width: 140px;
    height: 20px;
    color: #FFFFFF;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 20px;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 60px;
    color: #FFFFFF;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 20px;
`;

const StyledRightDiv = styled.div`
    position:absolute;
    right:0;
`;

const NavBar = () => {
    return (
        <StyledNav className="navbar">
            <StyledH1> E-shop </StyledH1>
            <StyledRightDiv>
                {/* <StyledButton> Home </StyledButton>
                <StyledButton> Cart </StyledButton> */}
            </StyledRightDiv>
        </StyledNav>
    )
}

export default NavBar
