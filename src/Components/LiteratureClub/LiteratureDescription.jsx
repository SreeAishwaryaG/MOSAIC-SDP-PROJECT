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

const LiteratureDescription = () => {
  return (
  
<DescriptionContainer>
  <Heading>Dive into the World of Literature!</Heading>
  <Text>
    Welcome to the Literature Club, a sanctuary for book lovers and aspiring writers alike. Our club celebrates the written word in all its forms, offering a space to read, write, and discuss literature. From poetry readings and book discussions to writing workshops and storytelling sessions, we provide a variety of events to inspire and challenge your literary talents. Whether you're an avid reader, a budding writer, or simply someone who loves a good story, you'll find a welcoming community here. Join us and let your literary journey begin!
  </Text>
</DescriptionContainer>

  );
};

export default LiteratureDescription;
