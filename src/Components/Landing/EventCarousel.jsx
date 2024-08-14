// src/EventCarousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import event2 from '../assets/pexels-pixabay-159581.jpg';
import event1 from '../assets/musician-4797838.jpg';
import event3 from '../assets/cricket-390556.jpg';

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #481E14; /* Color that matches the theme */
  font-family: 'Roboto', sans-serif;
  margin-top:1rem;
`;
const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding-bottom:100px;
 
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.offset});
`;

const CarouselItem = styled.div`
  flex: 0 0 100%; /* Each item takes up the full width of the carousel container */
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;
  margin-left:34px;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
   color: '#481E14';
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0C0C0C;
  font-family: 'Roboto', sans-serif;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  text-align: justify;
  margin-left:30px;
  width:80%
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const events = [
      {
          img: event1,
          
          description: "MOSAIC offers a range of dynamic club activities to keep you involved and motivated. From interactive quizzes and workshops to exciting competitions and social events, our platform provides ample opportunities to learn, grow, and have fun with your club community."

          
        },
        {
          img: event2,
        
          description: "Discover clubs that perfectly match your interests with our fun and interactive quizzes. MOSAIC's smart recommendation engine helps you find your ideal club based on your preferences, ensuring you connect with like-minded individuals and pursue your passions."
        },
    {
      img: event3,
     
      description: "Gain access to exclusive online and offline events organized by various clubs. MOSAIC ensures that you are always informed about upcoming events, allowing you to participate in unique experiences, network with fellow members, and enjoy special perks tailored to your interests."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselContainer>
     <Title>Why MOSAIC?</Title>
      <CarouselWrapper offset={`-${currentIndex * 100}%`}>
        {events.map((event, index) => (
          <CarouselItem key={index}>
            <ImageContainer>
              <Image src={event.img} alt={event.title} />
            </ImageContainer>
            <TextContainer>
              <Heading>{event.title}</Heading>
              <Description>{event.description}</Description>
            </TextContainer>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <PrevButton onClick={handlePrev}>‹</PrevButton>
      <NextButton onClick={handleNext}>›</NextButton>
    </CarouselContainer>
  );
};

export default EventCarousel;
