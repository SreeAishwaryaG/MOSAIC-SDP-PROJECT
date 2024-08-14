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
  { name: 'Music Jam Session', date: '2024-08-01', description: 'Join us for an evening of live music and jam sessions! Bring your instruments and share the stage with fellow musicians.' },
  { name: 'Choir Practice', date: '2024-08-10', description: 'Weekly choir practice session. All members are welcome. Prepare for our upcoming performance and improve your vocal skills.' },
  { name: 'Concert Night', date: '2024-08-15', description: 'Experience a night of great music performances. Enjoy a variety of genres and support your fellow club members.' },
  { name: 'Music Theory Workshop', date: '2024-08-20', description: 'A comprehensive workshop on music theory. Learn about scales, chords, and the structure of different musical compositions.' },
  { name: 'Open Mic Night', date: '2024-08-25', description: 'Show off your talent at our open mic night. Sing, play an instrument, or perform your original compositions.' },
  { name: 'Music Production Seminar', date: '2024-08-30', description: 'Learn the basics of music production in this seminar. Get hands-on experience with professional production software.' },
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
