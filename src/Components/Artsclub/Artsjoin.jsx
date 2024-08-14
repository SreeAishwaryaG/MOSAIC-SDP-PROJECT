import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useJoin } from '../JoinContext';

const PageContainer = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f5e8dc;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  color: #9b3922;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  color: #3d2b1f;
  font-size: 1.1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #9b3922;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #7d2b1a;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #9b3922;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #7d2b1a;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.0);
  }
`;

const JoinClubArts = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [clubName, setClubName] = useState('');
  const { setHasJoined } = useJoin(); // Use the context hook
  const navigate = useNavigate(); // Use useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/arts-join', {
        fullName,
        email,
        studentId,
        department,
        yearOfStudy,
        clubName
      });

      if (response.status === 200) {
        setHasJoined(true);
        navigate('/arts'); // Redirect to sports dashboard
      }
    } catch (error) {
      console.error('Error joining the club:', error);
    }
  };

  return (
    <PageContainer>
      <Header>
        <Heading>Join the Club</Heading>
      </Header>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="studentId">Student ID</Label>
          <Input type="text" id="studentId" name="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="department">Department/Major</Label>
          <Input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="yearOfStudy">Year of Study</Label>
          <Input type="text" id="yearOfStudy" name="yearOfStudy" value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} required />
        </FormGroup>
        
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default JoinClubArts;
