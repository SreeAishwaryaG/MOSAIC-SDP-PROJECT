import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    padding: 20px;
    background-color: #1F1F1F;
    color: #F5E8DC;
    border-radius: 8px;
`;

const FormField = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 5px;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #555;
        border-radius: 4px;
        background-color: #333;
        color: #F5E8DC;
        margin-right:2px;
    }

    textarea {
        resize: vertical;
    }
`;

const SubmitButton = styled.button`
    background-color: #F2613F;
    color: #F5E8DC;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #D9534F;
    }
`;

const EventForm = ({ addEvent, updateEvent, currentEvent, setCurrentEvent }) => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        description: ''
    });

    useEffect(() => {
        if (currentEvent) {
            setEventData(currentEvent);
        }
    }, [currentEvent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentEvent && currentEvent.id) {
            updateEvent(eventData);
        } else {
            addEvent(eventData);
        }
        setEventData({
            name: '',
            date: '',
            description: ''
        });
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormField>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder = "Event name"
                    value={eventData.name}
                    onChange={handleChange}
                    required
                />
            </FormField>
            <FormField>
                <label htmlFor="date"></label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    required
                />
            </FormField>
            <FormField>
                <label htmlFor="description"></label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Description"
                    value={eventData.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </FormField>
            <SubmitButton type="submit">
                {currentEvent && currentEvent.id ? 'Update Event' : 'Create Event'}
            </SubmitButton>
        </FormWrapper>
    );
};

export default EventForm;
