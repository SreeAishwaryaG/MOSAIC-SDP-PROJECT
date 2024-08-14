import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext.jsx';
const PageContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const EventTitle = styled.h1`
  color: #9B3922;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5E8DC;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
  width: 100%;
  max-width: 500px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #3d2b1f;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #9B3922;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormSelect = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #9B3922;
  border-radius: 5px;
  font-size: 1rem;
`;

const ConfirmButton = styled.button`
  padding: 15px 30px;
  background-color: #9B3922;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F2613F;
  }
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background for blur effect */
  backdrop-filter: blur(5px); /* Apply blur effect */
  z-index: 900; /* Below the popup but above the rest */
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: white;
  border: 2px solid #9B3922;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 1000;
  text-align: center;
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  background-color: #9B3922;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #F2613F;
  }
`;

const ParticipatePage = () => {
  const { user } = useContext(UserContext); // Get user information from UserContext
  const [formData, setFormData] = useState({
    name: user.firstName, // Pre-fill the name from user information
    email: user.email, // Pre-fill the email from user information
    club: '',
    event: '',
    eventDate: ''
  });
  const [clubs] = useState([
    { id: 1, name: 'Arts Club' },
    { id: 2, name: 'Sports Club' },
    { id: 5, name: 'Literature Club' },
    { id: 4, name: 'Coding Club' },
    { id: 3, name: 'Music Club' }
  ]);
  const [events] = useState([
    { id: 1, name: 'Painting Workshop', clubId: 1, eventDate: '2024-08-02' },
    { id: 2, name: 'Sculpture Exhibition', clubId: 1, eventDate: '2024-08-09' },
    { id: 3, name: 'Photography Walk', clubId: 1, eventDate: '2024-08-16' },
    { id: 4, name: 'Art History Lecture', clubId: 1, eventDate: '2024-08-21' },
    { id: 5, name: 'Digital Art Workshop', clubId: 1, eventDate: '2024-08-31' },
    { id: 6, name: 'Craft Fair', clubId: 1, eventDate: '2024-08-26' },
    { id: 7, name: 'Soccer Practice', eventDate: '2024-08-12', clubId: 2 },
    { id: 8, name: 'Tennis Match', eventDate: '2024-08-18', clubId: 2 },
    { id: 9, name: 'Yoga Session', eventDate: '2024-08-22', clubId: 2 },
    { id: 10, name: 'Marathon Training', eventDate: '2024-08-27', clubId: 2 },
    { id: 11, name: 'Swimming Gala', eventDate: '2024-08-29', clubId: 2 },
    { id: 12,name: 'Music Jam Session', eventDate: '2024-08-01', clubId: 3 },
    { id: 13,name: 'Choir Practice',eventDate: '2024-08-10' , clubId: 3},
    { id: 14,name: 'Concert Night', eventDate: '2024-08-15', clubId: 3},
    { id: 15,name: 'Hackathon', eventDate: '2024-08-05',clubId:4 },
    { id: 16,name: 'Python Programming Workshop', eventDate: '2024-08-11',clubId:4 },
    { id: 17,name: 'Algorithm Optimization Session', eventDate: '2024-08-17', clubId:4 },
    {  id: 18,name: 'Literary History Lecture', eventDate: '2024-08-21',clubId:5 },
    {  id: 19,name: 'Open Mic Night', eventDate: '2024-08-26', clubId:5},
    { id:20,name: 'Storytelling Session', eventDate: '2024-08-31', clubId:5},
  
   
  ]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isMember, setIsMember] = useState(false); // Track club membership status
  const navigate = useNavigate();

  
  useEffect(() => {
    if (formData.club) {
      // Check if the user is a member of the selected club
      axios.post('http://localhost:8080/api/ismember', { email: user.email, clubId: formData.club })
        .then(response => {
          setIsMember(response.data.isMember); // Assuming response contains an `isMember` field
        })
        .catch(error => {
          console.error('Error checking membership status:', error);
        });

      const filtered = events.filter(event => event.clubId === parseInt(formData.club));
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents([]);
    }
  }, [formData.club, events, user.email]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

 
    if (name === 'event') {
      const selectedEvent = events.find(event => event.id === parseInt(value));
      if (selectedEvent) {
        setFormData((prevData) => ({ ...prevData, eventDate: selectedEvent.eventDate }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/participate', formData)
      .then(response => {
        setShowPopup(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/dashboard'); 
  };

  return (
    <PageContainer>
      <EventTitle>Register for an Event</EventTitle>
              <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="club">Club:</FormLabel>
              <FormSelect
                id="club"
                name="club"
                value={formData.club}
                onChange={handleChange}
                required
              >
                <option value="">Select a club</option>
                {clubs.map((club) => (
                  <option key={club.id} value={club.id}>{club.name}</option>
                ))}
              </FormSelect>
            </FormField>
            <FormField>
              <FormLabel htmlFor="event">Event:</FormLabel>
              <FormSelect
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
              >
                <option value="">Select an event</option>
                {filteredEvents.map((event) => (
                  <option key={event.id} value={event.id}>{event.name}</option>
                ))}
              </FormSelect>
            </FormField>
            <FormField>
              <FormLabel htmlFor="eventDate">Event Date:</FormLabel>
              <FormInput
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                readOnly
              />
            </FormField>
            <ConfirmButton type="submit">Register</ConfirmButton>
          </form>
        </FormContainer>
    
      {showPopup && (
        <>
          <PopupBackground onClick={handlePopupClose} />
          <Popup>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering for the event.</p>
            <PopupButton onClick={handlePopupClose}>Close</PopupButton>
          </Popup>
        </>
      )}
    </PageContainer>
  );
};

export default ParticipatePage;
