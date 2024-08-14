import React from 'react';
import styled from 'styled-components';
import club1 from '../assets/pexels-kaplanart-10519055.jpg';
import club2 from '../assets/pexels-omerderinyar-27152933.jpg';
import club3 from '../assets/pexels-mikhail-nilov-8391469.jpg';
import club4 from '../assets/club4.jpg';
import club5 from '../assets/ai-generated-8885821_1920.png';
import ClubSection from './Clubsection';
import Headbar from './Headbar';
import Footer from "../Footer/Footer";
import FaqComponent from '../Landing/FAQ';
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #F5E8DC;
  min-height: 100vh;
`;

const WelcomeMessage = styled.h1`
   margin-top: 6rem;
  font-size: 2.4rem;
  color: #0C0C0C;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #0C0C0C;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F2613F;
  color: #fff;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const Dashboard1 = () => {
  return (
    <div>
    <Headbar/>
    <DashboardContainer>
      <WelcomeMessage>Welcome to Club Dashboard</WelcomeMessage>
      <CardsContainer>
      <Card>
          <CardInner>
            <CardFront>
              <CardImage src={club5} alt="Club 1" />
            </CardFront>
            <CardBack>
              <CardTitle>Arts</CardTitle>
            </CardBack>
          </CardInner>
        </Card>
        <Card>
          <CardInner>
            <CardFront>
              <CardImage src={club1} alt="Club 1" />
            </CardFront>
            <CardBack>
              <CardTitle>Music</CardTitle>
            </CardBack>
          </CardInner>
        </Card>
        <Card>
          <CardInner>
            <CardFront>
              <CardImage src={club2} alt="Club 2" />
            </CardFront>
            <CardBack>
              <CardTitle>Sports</CardTitle>
            </CardBack>
          </CardInner>
        </Card>
        <Card>
          <CardInner>
            <CardFront>
              <CardImage src={club3} alt="Club 3" />
            </CardFront>
            <CardBack>
              <CardTitle>Literature</CardTitle>
            </CardBack>
          </CardInner>
        </Card>
        <Card>
          <CardInner>
            <CardFront>
              <CardImage src={club4} alt="Club 1" />
            </CardFront>
            <CardBack>
              <CardTitle>Coding</CardTitle>
            </CardBack>
          </CardInner>
        </Card>
      </CardsContainer>
      {/* <ClubDescription/> */}
      <ClubSection/>
      
    </DashboardContainer>
    <FaqComponent/>
    <Footer/>
    </div>
  );
};

export default Dashboard1;
