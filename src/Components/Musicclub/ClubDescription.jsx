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

const ClubDescription = () => {
  return (
    <DescriptionContainer>
      <Heading>Join the Melody Maker!</Heading>
      <Text>
        At the Music Club, we bring together a vibrant community of music lovers and creators. Our club is dedicated to providing a space where members can explore their musical interests, learn from one another, and share their passion for music. Whether you're a seasoned musician or just starting your musical journey, you'll find a welcoming environment here. We host a variety of events including jam sessions, concerts, and choir practices, ensuring there's something for everyone. Join us and immerse yourself in a world where rhythm and melody come to life. Let’s make music together!
      </Text>
    </DescriptionContainer>
  );
};

export default ClubDescription;
