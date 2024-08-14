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
  { name: 'Poetry Reading', date: '2024-08-02', description: 'Immerse yourself in the beauty of poetry as our members share their favorite poems.' },
  { name: 'Book Discussion', date: '2024-08-09', description: 'Join us for a lively discussion on our book of the month. All readers welcome!' },
  { name: 'Writing Workshop', date: '2024-08-16', description: 'Enhance your writing skills in our hands-on workshop led by experienced authors.' },
  { name: 'Literary History Lecture', date: '2024-08-21', description: 'Delve into the fascinating history of literature in our engaging lecture.' },
  { name: 'Open Mic Night', date: '2024-08-26', description: 'Share your original works or favorite excerpts in our supportive open mic night.' },
  { name: 'Storytelling Session', date: '2024-08-31', description: 'Experience the magic of storytelling with our interactive session for all ages.' },
];

const LiteratureUpcoming = () => {
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

export default LiteratureUpcoming;
