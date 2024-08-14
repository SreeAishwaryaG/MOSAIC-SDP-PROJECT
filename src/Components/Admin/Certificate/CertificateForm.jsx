import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    color: #F5E8DC;
    max-width: 600px;
    margin: 20px auto;
`;

const FormField = styled.div`
    margin-bottom: 20px;
`;



const Input = styled.input`
    width: 97%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #2C2C2C;
    color: #F5E8DC;
    
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #F2613F;
    color: #F5E8DC;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #D9534F;
    }
`;

const CertificateForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [club, setClub] = useState('');
    const [eventtitle, setEventtitle] = useState('');
    
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, club,eventtitle, date });
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <FormField>
                  
                    <Input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormField>
                <FormField>
                  
                    <Input
                        type="text"
                        value={club}
                        placeholder="Club"
                        onChange={(e) => setClub(e.target.value)}
                        required
                    />
                </FormField>
                <FormField>
                   
                    <Input
                        type="text"
                        value={eventtitle}
                        placeholder="Event Title"
                        onChange={(e) => setEventtitle(e.target.value)}
                        required
                    />
                </FormField>
                <FormField>
                   
                    <Input
                        type="date"
                        value={date}
                        placeholder="Date"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </FormField>
                <Button type="submit">Generate Certificate</Button>
            </form>
        </FormWrapper>
    );
};

export default CertificateForm;
