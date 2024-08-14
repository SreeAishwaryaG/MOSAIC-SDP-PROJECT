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
    { name: 'Painting Workshop', date: '2024-08-02', description: 'Explore your creativity in our painting workshop. All materials provided.' },
    { name: 'Sculpture Exhibition', date: '2024-08-09', description: 'Join us for a showcase of stunning sculptures created by our talented members.' },
    { name: 'Photography Walk', date: '2024-08-16', description: 'Capture the beauty of nature on our guided photography walk. Bring your camera!' },
    { name: 'Art History Lecture', date: '2024-08-21', description: 'Learn about the history of art in our informative lecture. Open to all members.' },
    { name: 'Craft Fair', date: '2024-08-26', description: 'Display and sell your handmade crafts at our annual craft fair. Support local artists!' },
    { name: 'Digital Art Workshop', date: '2024-08-31', description: 'Discover the world of digital art in this hands-on workshop. Laptops provided.' },
  ];
  
const Artsupcoming = () => {
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

export default Artsupcoming;
