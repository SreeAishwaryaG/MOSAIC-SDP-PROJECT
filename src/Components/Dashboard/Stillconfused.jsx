import React, { useState } from 'react';
import styled from 'styled-components';
import ClubSection from '../Components/Clubsection';
import QuizPopup from './Quizpopup';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #F5E8DC;
  min-height: 100vh;
`;

const ConfusedButton = styled.button`
  background-color: #F2613F;
  color: white;
  border: none;
  padding: 4rem 6rem; /* Increased padding for larger size */
  border-radius: 8px; /* Slightly increased border-radius */
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem; /* Increased font size */
  margin-top: 2rem;
  width:100%;
  &:hover {
    background-color: #9B3922;
  }
`;

const ClubPage = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  const handleQuizOpen = () => {
    setQuizOpen(true);
  };

  const handleQuizClose = () => {
    setQuizOpen(false);
  };

  return (
    <PageContainer>
      <ClubSection />
      <ConfusedButton onClick={handleQuizOpen}>Still confused?</ConfusedButton>
      {quizOpen && <QuizPopup onClose={handleQuizClose} />}
    </PageContainer>
  );
};

export default ClubPage;
