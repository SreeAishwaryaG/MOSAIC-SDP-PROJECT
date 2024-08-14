import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import backgroundImage from '../assets/pexels-splitshire-1591.jpg'; // Update the path to your background image

import UpcomingEvents from './Upcomingevets'; // Import the upcoming events component
import ClubLeads from './Clublead';
import Headbar from '../Dashboard/Headbar';
import ClubDescription from './ClubDescription'; // Import the club description component
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { UserContext } from '../UserContext';
import axios from 'axios';

const DashboardContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 85vh; /* Full height within the container */
  color: white;
  margin-top: 4rem;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const WelcomeMessage = styled.div`
  flex: 1;
  text-align: right;
  margin: 0;
  margin-right: 5rem;
 
`;

const PlayfulMessage = styled.p`
  flex: 1;
  text-align: right;
  margin: 10px 0 0 0;
  font-style: italic;

`;

const JoinButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff6f61; /* Button color */
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
   &:hover {
    background-color: #e65950;
  }
`;

const CalendarWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(245, 232, 220, 0.8); /* Light beige with opacity */
  backdrop-filter: blur(10px); /* Apply blur to the calendar container */
  margin-top: 9rem;
  position: relative; /* Added to position tooltip within this container */
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  max-width: 200px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1000;
  transform: translateX(-50%);
`;

const events = [
  { name: 'Music Jam Session', date: '2024-08-01', description: 'Join us for an evening of live music and jam sessions!' },
  { name: 'Choir Practice', date: '2024-08-10', description: 'Weekly choir practice session. All members are welcome.' },
  { name: 'Concert Night', date: '2024-08-15', description: 'Experience a night of great music performances.' },
];

const MusicDashboard = () => {
  const [value, setValue] = useState(new Date());
  const [tooltip, setTooltip] = useState({ display: false, content: '', left: 0, top: 0 });
  const { user } = useContext(UserContext);
  const [clubJoined, setClubJoined] = useState(false);
  const navigate = useNavigate(); // Added for navigation

  useEffect(() => {
    if (user && user.email) {
      const fetchClubStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/check-musicclub-status/${user.email}`);
          setClubJoined(response.data.isJoined);
        } catch (error) {
          console.error('Error fetching club status:', error);
        }
      };

      fetchClubStatus();
    }
  }, [user]);

  const handleJoinOrLeave = async () => {
    if (!user || !user.email) {
      console.error('User or user email is not available');
      return;
    }

    try {
      if (clubJoined) {
        await axios.delete(`http://localhost:8080/leave-musicclub/${user.email}`);
        setClubJoined(false);
      } else {
        // Navigate to join club page
        navigate('/music-join');
      }
    } catch (error) {
      console.error('Error joining or leaving the club:', error);
    }
  };


  const handleMouseEnter = (e, content) => {
    const rect = e.target.getBoundingClientRect();
    const calendarRect = e.target.closest('.react-calendar').getBoundingClientRect();
    const left = rect.left + window.scrollX - calendarRect.left + rect.width / 2;
    const top = rect.top + window.scrollY - calendarRect.top - 30;

    setTooltip({
      display: true,
      content,
      left,
      top
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ display: false, content: '', left: 0, top: 0 });
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsOnDate = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
      if (eventsOnDate.length > 0) {
        return (
          <div
            className="event-indicator-container"
            onMouseEnter={(e) => handleMouseEnter(e, eventsOnDate.map(event => `${event.name}`).join(' | '))}
            onMouseLeave={handleMouseLeave}
          >
            {eventsOnDate.map((event, index) => (
              <div key={index} className="event-indicator"></div>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div>
      <Headbar />
      <DashboardContainer>
        <HeroSection>
          <HeroContent>
            <CalendarWrapper>
              <CalendarContainer>
                <Calendar
                  onChange={setValue}
                  value={value}
                  tileContent={tileContent}
                />
                {tooltip.display && (
                  <Tooltip style={{ left: tooltip.left, top: tooltip.top }}>
                    {tooltip.content}
                  </Tooltip>
                )}
              </CalendarContainer>
            </CalendarWrapper>
            <WelcomeMessage>
              <h1>Welcome to the Music Club</h1>
              <PlayfulMessage>Let the rhythm take you away!</PlayfulMessage>
              <JoinButton onClick={handleJoinOrLeave}>
                {clubJoined ? 'Leave Club' : 'Join Club'}
              </JoinButton>

            </WelcomeMessage>
          </HeroContent>
        </HeroSection>
        <ClubDescription />
        <UpcomingEvents />
        <ClubLeads />
        <style jsx>{`
          .react-calendar {
            width: 100%;
            border-radius: 8px;
            border: 1px solid #dfe1e5;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background: rgba(245, 232, 220, 0.8); /* Light beige background for the entire calendar */
            color: black;
            backdrop-filter: blur(10px); /* Apply blur */
          }
          .react-calendar__navigation {
            background: rgba(245, 232, 220, 0.8); /* Light beige background */
          }
          .react-calendar__navigation button {
            color: black;
          }
          .react-calendar__tile--now {
            background: #3d2b1f; /* Dark brown color */
            color: white;
          }
          .react-calendar__tile--active {
            background: rgba(255, 111, 97, 0.8); /* Dot color */
            color: white;
          }
          .react-calendar__tile {
            background: rgba(245, 232, 220, 0.4); /* Light beige background for the dates */
            color: black;
          }
          .event-indicator-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .event-indicator {
            width: 8px;
            height: 8px;
            background-color: #ff6f61; /* Dot color */
            border-radius: 50%;
            margin: 2px;
          }
        `}</style>
      </DashboardContainer>
      <Footer/>
    </div>
  );
};

export default MusicDashboard;
