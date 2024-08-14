import React, { useState } from 'react';
import styled from 'styled-components';
import EventCardList from './EventList';
import Adminhead from '../Adminheader';

const PageWrapper = styled.div`
    background-color: #0C0C0C;
    color: #F5E8DC;
    min-height: 100vh;
    padding: 20px;
`;

const PageTitle = styled.h1`
    color: #F2613F;
    text-align: center;
    margin-bottom: 20px;
`;

const AdminEventsPage = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'Music Concert', date: '2023-08-12', description: 'An evening of music and fun.' },
        { id: 2, name: 'Art Exhibition', date: '2023-09-05', description: 'Showcasing local artists.' },
        { id: 3, name: 'Sports Day', date: '2023-10-20', description: 'A day of competitive sports.' }
    ]);

    const [currentEvent, setCurrentEvent] = useState(null);

    const addEvent = (newEvent) => {
        setEvents([...events, { ...newEvent, id: events.length + 1 }]);
        setCurrentEvent(null); // Reset currentEvent to null after adding
    };

   

    const deleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div>
            <Adminhead/>
        <PageWrapper>
            <PageTitle>Manage Events</PageTitle>
            <EventCardList
                events={events}
                setCurrentEvent={setCurrentEvent}
                deleteEvent={deleteEvent}
                addEvent={addEvent}
                currentEvent={currentEvent}
            />
        </PageWrapper>
        </div>
    );
};

export default AdminEventsPage;
