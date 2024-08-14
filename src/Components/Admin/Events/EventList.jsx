import React from 'react';
import styled from 'styled-components';
import EventForm from './EventForm';

const CardListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

const EventCard = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    width:  27%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #F5E8DC;
    margin-left:20px;
`;

const CardContent = styled.div`
    flex: 1;
`;

const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &.edit {
            background-color: #F2613F;
            color: #F5E8DC;

            &:hover {
                background-color: #D9534F;
            }
        }

        &.delete {
            background-color: #D9534F;
            color: #F5E8DC;

            &:hover {
                background-color: #C9302C;
            }
        }
    }
`;

const AddCard = styled.div`
     background-color:  #F2613F;
    padding: 20px;
    border-radius: 8px;
    width:  27%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    margin-left:20px;
`;

const FormCard = styled(EventCard)`
    padding: 0;
`;

const EventList = ({ events, setCurrentEvent, deleteEvent, addEvent, currentEvent }) => {
    const handleAddEvent = () => {
        setCurrentEvent({ id: null, name: '', date: '', description: '' }); // Create a blank event for the form
    };

    return (
        <CardListWrapper>
            {events.map((event) => (
                <EventCard key={event.id}>
                    <CardContent>
                        <h4>{event.name}</h4>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </CardContent>
                    <CardActions>
                        <button 
                            className="edit" 
                            onClick={() => setCurrentEvent(event)}
                        >
                            Edit
                        </button>
                        <button 
                            className="delete" 
                            onClick={() => deleteEvent(event.id)}
                        >
                            Delete
                        </button>
                    </CardActions>
                </EventCard>
            ))}
            {currentEvent === null ? (
                <AddCard onClick={handleAddEvent}>
                    <h4>+ Add Event</h4>
                </AddCard>
            ) : (
                <FormCard>
                    <EventForm
                        addEvent={addEvent}
                        updateEvent={() => {}}
                        currentEvent={currentEvent}
                        setCurrentEvent={setCurrentEvent}
                    />
                </FormCard>
            )}
        </CardListWrapper>
    );
};

export default EventList;
