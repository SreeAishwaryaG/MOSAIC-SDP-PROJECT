import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import backgroundImage from '../assets/monitor-933392.jpg'; // Update the path to your background image

import UpcomingEvents from './Codingupcoming'; // Import the upcoming events component
import ClubLeads from './Codingleads';
import Headbar from '../Dashboard/Headbar';
import ClubDescription from './Codingdescription'; // Import the club description component
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
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
  background-color: #9B3922;
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
  { name: 'Hackathon', date: '2024-08-05', description: 'Join us for a 24-hour coding challenge. Form teams and build innovative projects.' },
  { name: 'Python Programming Workshop', date: '2024-08-11', description: 'Learn the basics of Python programming in this beginner-friendly workshop.' },
  { name: 'Algorithm Optimization Session', date: '2024-08-17', description: 'Improve your algorithm skills with our guided optimization session.' },
  { name: 'Web Development Bootcamp', date: '2024-08-22', description: 'Build your first website in this intensive web development bootcamp.' },
  { name: 'Machine Learning Seminar', date: '2024-08-28', description: 'Explore the world of machine learning in this informative seminar. Open to all levels.' },
  { name: 'Coding Competition', date: '2024-08-30', description: 'Test your coding skills in our friendly competition. Prizes for the top performers.' },
];
const CodingDashboard = () => {
  const [value, setValue] = useState(new Date());
  const [tooltip, setTooltip] = useState({ display: false, content: '', left: 0, top: 0 });
  const { user } = useContext(UserContext);
  const [clubJoined, setClubJoined] = useState(false);
  const navigate = useNavigate(); // Added for navigation


  useEffect(() => {
    if (user && user.email) {
      const fetchClubStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/check-codingclub-status/${user.email}`);
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
        await axios.delete(`http://localhost:8080/leave-codingclub/${user.email}`);
        setClubJoined(false);
      } else {
        // Navigate to join club page
        navigate('/coding-join');
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
              <h1>Welcome to the Coding Club</h1>
              <PlayfulMessage> Let’s code something awesome!</PlayfulMessage>
              <JoinButton onClick={handleJoinOrLeave}>
                {clubJoined ? 'Leave Club' : 'Join Club'}
              </JoinButton>
            </WelcomeMessage>
          </HeroContent>
        </HeroSection>
        <ClubDescription />
        <UpcomingEvents />
        <ClubLeads />
        <Footer/>
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
    </div>
  );
};

export default CodingDashboard;
