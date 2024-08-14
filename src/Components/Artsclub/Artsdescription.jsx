import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  padding: 2rem;
  background: #f5e8dc; /* Light beige background */
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
  text-align: justify;
`;

const Heading = styled.h2`
margin-top:1rem;
  margin-bottom: 2rem;
   color: #9B3922;
  text-align: center;

`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #3d2b1f; /* Dark brown color */
`;

const Artsdescription = () => {
  return (
    <DescriptionContainer>
      <Heading>Unleash Your Inner Artist!</Heading>
      <Text>
      Welcome to the Arts Club, where creativity knows no bounds. Our club is a haven for artists of all levels, offering a space to express, explore, and expand your artistic talents. From painting and sculpture to photography and digital art, we host a variety of workshops and exhibitions to inspire and challenge you. Whether you're a seasoned artist or just discovering your creative spark, you'll find a supportive community here. Join us and let your imagination run wild!
      </Text>
    </DescriptionContainer>
  );
};

export default Artsdescription;
