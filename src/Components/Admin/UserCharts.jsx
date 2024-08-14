import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SalesByCountryWrapper = styled.div`
    background-color: #1F1F1F; 
    padding: 20px;
    border-radius: 12px;
    color: #F5F5F5;
    margin-top: 30px;
    width: 95%;
    margin-left: 10px;

    table {
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0;

        thead {
            border-bottom: 2px solid #F2613F;
        }

        th, td {
            padding: 12px 15px; 
            text-align: left;
            border: none;
        }

        th {
            color: #F2613F; 
            font-weight: bold; 
        }

        tbody tr {
            border-bottom: 1px solid #9B3922;
        }

        tbody tr:last-child {
            border-bottom: none;
        }

        tbody tr:hover {
            background-color: #333; 
        }
    }
`;

const UserCharts = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching user data from the backend
        axios.get('http://localhost:8080/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    return (
        <SalesByCountryWrapper>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </SalesByCountryWrapper>
    );
};

export default UserCharts;
