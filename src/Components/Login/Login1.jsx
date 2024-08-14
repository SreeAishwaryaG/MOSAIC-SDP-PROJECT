import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../UserContext';


const LoginPageContainer = styled.div`
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
  background-color: white;
  color: #0C0C0C;
  z-index: 2;
`;

const SignupSide = styled(Side)`
  background: linear-gradient(135deg, #F5E8DC 50%, #E0E0E0 50%);
  color: #0C0C0C;
  z-index: 1;
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

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8080/login", formData);
        const user = response.data;
        if (user) {
          updateUser(user); // Update user context
          navigate("/dashboard");
        } else {
          setErrors({ apiError: 'Invalid email or password' });
        }
      } catch (error) {
        console.error("There was an error logging in!", error);
        setErrors({ apiError: 'Invalid email or password' });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password.trim()) errors.password = 'Password is required';
    return errors;
  };


  const { email, password } = formData;
  return (
    <LoginPageContainer>
      <SignupSide>
        <ContentContainer>
          <Heading>Welcome to MOSAIC!</Heading>
          <p>Don’t have an account?</p>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </ContentContainer>
      </SignupSide>
      <LoginSide>
        <Separator />
        <ContentContainer>
          <Heading>Welcome Back</Heading>
          <Form onSubmit={handleSubmit}>
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
            {errors.apiError && <ErrorMessage>{errors.apiError}</ErrorMessage>}
            <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</Button>
          </Form>
        </ContentContainer>
      </LoginSide>
    </LoginPageContainer>
  );
};

export default LoginPage;
