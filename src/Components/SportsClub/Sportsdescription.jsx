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

const Sportsdescription = () => {
  return (
    <DescriptionContainer>
      <Heading>Get in the Game!</Heading>
      <Text>
      Welcome to the Sports Club, where athleticism and teamwork come together. Our club offers a wide range of sports activities and events for all skill levels. From basketball tournaments and soccer practices to yoga sessions and marathon training, there's something for everyone. Whether you're looking to compete, stay fit, or just have fun, you'll find a supportive and energetic community here. Join us and let's play, train, and celebrate our love for sports together!      </Text>
    </DescriptionContainer>
  );
};

export default Sportsdescription;
