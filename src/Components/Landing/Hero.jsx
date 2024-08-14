// src/HeroSection.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import heroImage from '../assets/backgroundim.png'; // Adjust the path to your image
 
const HeroContainer = styled.section`
  height: 100vh;
  background: url(${heroImage}) no-repeat center center/cover;
  display: flex;
  align-items: flex-end; /* Align content to the bottom */
  justify-content: flex-start; /* Align content to the left */
  color: white;
  text-align: left;
  padding: 2rem; /* Add padding to ensure text is not too close to edges */
`;

const HeroContent = styled.div`
  max-width: 600px;
  padding: 1rem;
  background: none; /* Fully transparent background */
  /* Optional: Add shadow or border to improve text readability */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px; /* Optional: Rounded corners for better aesthetics */
  margin-bottom: 2rem; /* Move the welcome message slightly to the top */
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: white;
  background-color: #F2613F;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #9B3922;
  }
`;

const HeroSection = () => {
  const clubCirclesRef = useRef(null);

  const scrollToClubCircles = () => {
    clubCirclesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to MOSAIC</HeroTitle>
        <HeroSubtitle>Join a Community That Inspires You</HeroSubtitle>
       
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
