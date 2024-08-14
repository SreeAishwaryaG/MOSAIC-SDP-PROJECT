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

const Codingdescription = () => {
  return (
    <DescriptionContainer>
      <Heading>Code Your Way to Success!</Heading>
      <Text>
      Welcome to the Coding Club, the hub for tech enthusiasts and future developers. Here, you'll find a community passionate about coding, from beginners to experts. Our club offers a range of activities including hackathons, workshops, and coding competitions to help you enhance your skills and stay ahead in the tech world. Whether you're interested in web development, algorithms, or machine learning, there's something for everyone. Join us and start your journey in the fascinating world of coding!
      </Text>
    </DescriptionContainer>
  );
};

export default Codingdescription;
