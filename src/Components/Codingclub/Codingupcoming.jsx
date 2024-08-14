import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useJoin } from '../JoinContext';

const EventsSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #9B3922;
  margin-bottom: 40px;
  
`;

const EventsContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventCard = styled.div`
  background-color: #F5E8DC;
  border: 1px solid #9B3922;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const EventName = styled.h3`
  margin: 0 0 10px;
  color: #9B3922;
`;

const EventDate = styled.p`
  margin: 5px 0;
  color: #3d2b1f;
  font-weight: bold;
`;

const EventDescription = styled.p`
  color: #3d2b1f;
`;

const ParticipateButton = styled.button`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #9B3922;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F2613F;
  }
`;

const events = [
  { name: 'Hackathon', date: '2024-08-05', description: 'Join us for a 24-hour coding challenge. Form teams and build innovative projects.' },
  { name: 'Python Programming Workshop', date: '2024-08-11', description: 'Learn the basics of Python programming in this beginner-friendly workshop.' },
  { name: 'Algorithm Optimization Session', date: '2024-08-17', description: 'Improve your algorithm skills with our guided optimization session.' },
  { name: 'Web Development Bootcamp', date: '2024-08-22', description: 'Build your first website in this intensive web development bootcamp.' },
  { name: 'Machine Learning Seminar', date: '2024-08-28', description: 'Explore the world of machine learning in this informative seminar. Open to all levels.' },
  { name: 'Coding Competition', date: '2024-08-30', description: 'Test your coding skills in our friendly competition. Prizes for the top performers.' },
];

const Codingupcoming = () => {
  const { hasJoined } = useJoin();
  return (
    <EventsSection>
      <SectionTitle>Upcoming Events</SectionTitle>
      <EventsContainer>
        {events.map((event, index) => (
          <EventCard key={index}>
            <EventName>{event.name}</EventName>
            <EventDate>{event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
            <Link to={hasJoined ? "/participate" : "#"}>
              <ParticipateButton className={!hasJoined ? 'hidden' : ''}>
                Register
              </ParticipateButton>
            </Link>

          </EventCard>
        ))}
      </EventsContainer>
    </EventsSection>
  );
};

export default Codingupcoming;
