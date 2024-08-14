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
  { name: 'Basketball Tournament', date: '2024-08-03', description: 'Join our annual basketball tournament. Teams will compete for the championship!' },
  { name: 'Soccer Practice', date: '2024-08-12', description: 'Weekly soccer practice session. All skill levels welcome. Improve your game and meet new friends.' },
  { name: 'Tennis Match', date: '2024-08-18', description: 'Compete in our friendly tennis match. Prizes for the winners!' },
  { name: 'Yoga Session', date: '2024-08-22', description: 'Relax and rejuvenate in our guided yoga session. Mats provided.' },
  { name: 'Marathon Training', date: '2024-08-27', description: 'Prepare for the upcoming marathon with our training sessions. All levels welcome.' },
  { name: 'Swimming Gala', date: '2024-08-29', description: 'Participate in our swimming gala. Various races and events for all ages.' },
];

const UpcomingEvents = () => {
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

export default UpcomingEvents;
