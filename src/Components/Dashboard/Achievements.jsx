import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  margin-bottom:140px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: justify;
  border-radius: 8px;
   &:hover {
    opacity: 1;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  margin-right:30px;
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: justify;
  margin-right:40px;
`;

const Achievements = ({ image, title, description }) => (
  <CardContainer>
    <Image src={image} alt={title} />
    <DescriptionOverlay>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </DescriptionOverlay>
  </CardContainer>
);

export default Achievements;
