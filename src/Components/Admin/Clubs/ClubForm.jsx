// ClubForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    color: #F5E8DC;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #F2613F;
    background-color: #333;
    color: #F5E8DC;
`;

const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #F2613F;
    background-color: #333;
    color: #F5E8DC;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #F2613F;
    color: #F5E8DC;

    &:hover {
        background-color: #D9534F;
    }
`;

const ClubForm = ({ onSubmit, currentClub, setCurrentClub }) => {
    const [club, setClub] = useState({ name: '', description: '' });

    useEffect(() => {
        if (currentClub) {
            setClub(currentClub);
        }
    }, [currentClub]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClub({ ...club, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(club);
        setClub({ name: '', description: '' });
        setCurrentClub(null);
    };

    return (
        <FormWrapper>
            <Input
                type="text"
                name="name"
                placeholder="Club Name"
                value={club.name}
                onChange={handleChange}
            />
            <TextArea
                name="description"
                placeholder="Club Description"
                value={club.description}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>
                {currentClub ? 'Update Club' : 'Create Club'}
            </Button>
        </FormWrapper>
    );
};

export default ClubForm;
