import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // for navigation after login

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #0C0C0C;
    color: #F5F5F5;
`;

const LoginForm = styled.form`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 12px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const InputGroup = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 5px;
        color: #F5F5F5;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #333;
        background-color: #2c2c2c;
        color: #F5F5F5;
    }

    .error {
        color: #F2613F;
        font-size: 0.9rem;
        margin-top: 5px;
    }
`;

const SubmitButton = styled.button`
    background-color: #F2613F;
    color: #F5F5F5;
    border: none;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background-color: #D9534F;
    }
`;

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};
        if (!credentials.username) formErrors.username = 'Username is required';
        if (!credentials.password) formErrors.password = 'Password is required';
        // Example admin credentials
        if (credentials.username !== 'admin' || credentials.password !== 'adminPass') {
            formErrors.credentials = 'Invalid username or password';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        
            navigate('/admin');
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <InputGroup>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                </InputGroup>
                <InputGroup>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </InputGroup>
                {errors.credentials && <div className="error">{errors.credentials}</div>}
                <SubmitButton type="submit">Login</SubmitButton>
            </LoginForm>
        </LoginWrapper>
    );
};

export default AdminLogin;
