import React, { useState, forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuizPopup from '../Dashboard/Quizpopup';
import club1 from '../assets/pexels-avneet-kaur-669191817-19652643.jpg';
import club2 from '../assets/pexels-cottonbro-10329051.jpg';
import club3 from '../assets/pexels-edgar-okioga-221433-1185212.jpg';
import club4 from '../assets/pexels-florian-holly-2584321-6308163.jpg';
import club5 from '../assets/pexels-rafael-titoneli-1467386-3221533.jpg';

const ClubContainer = styled.section`
  padding: 2rem;
  text-align: center;
  width: 100%;
`;

const ClubHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #0C0C0C;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  margin-top: 6rem;
`;

const ScrollableCardWrapper = styled.div`
  position: relative;
`;

const ScrollableCardContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 2rem;
  padding: 1rem;
  scroll-snap-type: x mandatory; /* Snap to each card */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for touch devices */
  
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
`;

const ClubCard = styled.div`
  flex: 0 0 auto; /* Prevent shrinking or growing */
  width: 400px; /* Increased width for cards */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start; /* Snap alignment */
`;

const ClubImage = styled.img`
  width: 100%;
  height: 200px; /* Adjust height as needed */
  border-radius: 10px;
`;

const ClubDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #0C0C0C;
  line-height: 1.5;
  text-align: justify;
  padding: 1rem;
`;

const JoinButton = styled.button`
  position: absolute;
  top: 0.01rem; /* Adjust to move closer to the top edge */
  right: 0.01rem; /* Adjust to move closer to the right edge */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #F2613F; /* Button background color */
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #9B3922;
  }
`;

const ArrowIcon = styled.span`
  margin-left: 0.5rem;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid white;
  border-top: 2px solid white;
  transform: rotate(45deg);
`;

const ConfusedButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #481E14;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #F2613F;
  }
`;

const ScrollArrow = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2rem;
  color: #F2613F; /* Arrow color to match button */
  background-color: white; /* Background color of the arrow */
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
`;

const ClubSection = forwardRef((props, ref) => {
  const [clubs, setClubs] = useState([
    { id: 1, image: club1, description: 'Dive into a world of words and wonders! Join the Literature Club and embark on epic adventures, uncover hidden meanings, and share your favorite tales with fellow bookworms.', link: '/literature' },
    { id: 2, image: club2, description: 'Get your game face on and join the Sports Club! From thrilling matches to team spirit, we bring the action and excitement of sports right to you. Ready, set, go!', link: '/sports' },
    { id: 3, image: club3, description: 'Hit the right note with the Music Club! Whether you\'re a maestro or a newbie, come jam with us, create melodious memories, and let the rhythm take you away!', link: '/music' },
    { id: 4, image: club5, description: 'Explore the vibrant world of arts! Whether you paint, sketch, or craft, our Arts Club provides the perfect space for creativity and expression.', link: '/arts' },
    { id: 5, image: club4, description: 'Code your way to innovation in our Coding Club! Whether you\'re a seasoned programmer or just starting, join us to learn, build, and create amazing projects.', link: '/coding' },
  ]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const scrollContainerRef = useRef();

  const handleQuizOpen = () => {
    setIsQuizOpen(true);
  };

  const handleQuizClose = () => {
    setIsQuizOpen(false);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'right' ? container.scrollWidth / 3 : -container.scrollWidth / 3;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <ClubContainer ref={ref}>
      <ClubHeading>Exciting Club Selection</ClubHeading>
      <ScrollableCardWrapper>
        <ScrollableCardContainer ref={scrollContainerRef}>
          {clubs.map(club => (
            <ClubCard key={club.id}>
              <ClubImage src={club.image} alt={`Club ${club.id}`} />
              <ClubDescription>{club.description}</ClubDescription>
              <Link to={club.link}>
                <JoinButton>
                  Learn more <ArrowIcon />
                </JoinButton>
              </Link>
            </ClubCard>
          ))}
        </ScrollableCardContainer>
        <ScrollArrow onClick={() => scroll('right')}>→</ScrollArrow>
      </ScrollableCardWrapper>
      <ConfusedButton onClick={handleQuizOpen}>Still confused?</ConfusedButton>
      {isQuizOpen && <QuizPopup onClose={handleQuizClose} />}
    </ClubContainer>
  );
});

export default ClubSection;
