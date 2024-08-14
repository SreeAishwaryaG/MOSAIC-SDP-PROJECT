import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Registering components
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend);

const ActiveUsersWrapper = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    color: #F2613F;
    width: 45%;
    margin-left: 10px;
`;

const ActiveUsers = () => {
    const [activeUsersData, setActiveUsersData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Active Users',
                data: [],
                backgroundColor: '#0C0C0C',
                borderColor: '#F2613F',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        const fetchActiveUsersData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin/active-users');
                const data = response.data;
                setActiveUsersData({
                    labels: Object.keys(data),
                    datasets: [
                        {
                            label: 'Active Users',
                            data: Object.values(data),
                            backgroundColor: '#0C0C0C',
                            borderColor: '#F2613F',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching active users data', error);
            }
        };

        fetchActiveUsersData();
    }, []);

    return (
        <ActiveUsersWrapper key="active-users-chart">
            <Bar data={activeUsersData} />
        </ActiveUsersWrapper>
    );
}

export default ActiveUsers;
