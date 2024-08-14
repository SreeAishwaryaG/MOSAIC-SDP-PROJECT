import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'; // Adjust the path based on your image location
import { Link } from 'react-router-dom';
import { FaUserShield, FaUserPlus } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #F5E8DC;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box; /* Ensures padding is included in width calculation */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px; /* Adjust the height of the logo as needed */
  margin-right: 1rem; /* Adjusted to fit the text properly */
`;

const LogoText = styled.h1`
  font-size: 1.5rem; /* Adjust size as needed */
  color: #0C0C0C;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  text-decoration: none; /* Remove underline */
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Adjust distance of underline from text */
    left: 0;
    width: 0;
    height: 2px; /* Adjust thickness of underline */
    background: #F2613F;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; /* Add space between buttons */
`;

const Button = styled.button`
  background-color: #F2613F;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9B3922;
  }

  svg {
    margin-right: 0.5rem; /* Add space between icon and text */
  }
`;

// Remove underline and default link styles
const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
`;

const Header1 = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <StyledLink to="/">
          <Logo src={logo} alt="My Logo" />
        </StyledLink>
        <StyledLink to="/">
          <LogoText>MOSAIC</LogoText>
        </StyledLink>
      </LogoContainer>
      <ButtonContainer>
        <StyledLink to="/login">
          <Button>
            <FaUserPlus />
            Join Us
          </Button>
        </StyledLink>
        <StyledLink to="/admin-login">
          <Button>
            <FaUserShield />
            Admin
          </Button>
        </StyledLink>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header1;
