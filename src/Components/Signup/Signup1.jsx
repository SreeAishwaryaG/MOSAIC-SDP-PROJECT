import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../UserContext';

const SignupPageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const LoginSide = styled(Side)`
  background: linear-gradient(135deg, #F5E8DC 50%, #E0E0E0 50%);
  color: #0C0C0C;
  position: relative;
`;

const SignupSide = styled(Side)`
  background-color: white;
  color: #0C0C0C;
`;

const ContentContainer = styled.div`
  max-width: 400px;
  width: 100%;
  z-index: 2;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #F2613F;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #F2613F;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #9B3922;
  }
`;

const Separator = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  z-index: 1;
  transform: translateX(-50%);
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  
  const { updateUser } = useContext(UserContext); // Use UserContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    axios.post('http://localhost:8080/signup', formData)
      .then(response => {
        updateUser(response.data); // Update user context with response data
        localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
        navigate('/dashboard'); // Navigate to dashboard page
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last Name is required';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone Number is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const { firstName, lastName, phoneNumber, email, password, confirmPassword } = formData;

  return (
    <SignupPageContainer>
      <LoginSide>
        <Separator />
        <ContentContainer>
          <Heading>Welcome Back !</Heading>
          <p>Already have an account?</p>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </ContentContainer>
      </LoginSide>
      <SignupSide>
        <ContentContainer>
          <Heading>Welcome to MOSAIC!</Heading>
          <p>Don’t have an account? Create one here!</p>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            
            <Button type="submit">Sign Up</Button>
          </Form>
        </ContentContainer>
      </SignupSide>
    </SignupPageContainer>
  );
};

export default SignupPage;
