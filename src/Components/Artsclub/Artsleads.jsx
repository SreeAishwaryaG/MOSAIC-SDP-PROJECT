import React from 'react';
import styled from 'styled-components';
import lead1 from '../assets/Untitled design (1).png'; // Example image paths
import lead2 from '../assets/Untitled design (2).png'; // Example image paths

const LeadsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #9b3922;
  margin-bottom: 40px;
 
`;

const LeadCard = styled.div`
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
  margin: 20px;
  perspective: 1000px;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  margin-bottom:80px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #f5e8dc;
  border-radius: 50%;
  overflow: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #9b3922;
  color: white;
  border-radius: 50%;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const LeadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const LeadName = styled.h3`
  margin: 5px 0 0 0;
`;

const LeadPosition = styled.p`
  margin: 0;
  font-size: 14px;
`;

const leads = [
  { name: 'Eugene', position: 'President', image: lead1 },
  { name: 'Ember', position: 'Vice President', image: lead2 },
  { name: 'Isabella', position: 'Treasurer', image: lead2 },
  { name: 'Liam', position: 'Secretary', image: lead1 },
  { name: 'Eva', position: 'Public Relations', image: lead2 },
];

const Artsleads = () => {
  return (
    <LeadsContainer>
      <Title>Club Leads</Title>
      {leads.map((lead, index) => (
        <LeadCard key={index}>
          <FlipCardInner className="flip-card-inner">
            <FlipCardFront>
              <LeadImage src={lead.image} alt={lead.name} />
            </FlipCardFront>
            <FlipCardBack>
              <LeadName>{lead.name}</LeadName>
              <LeadPosition>{lead.position}</LeadPosition>
            </FlipCardBack>
          </FlipCardInner>
        </LeadCard>
      ))}
    </LeadsContainer>
  );
};

export default Artsleads;
