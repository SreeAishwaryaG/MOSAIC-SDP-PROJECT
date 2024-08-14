import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GeneralStatisticsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const StatItem = styled.div`
    margin-top: 3rem;
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    color: white;
    width: 20%;
    text-align: center;

    p {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.8rem;
        margin: 10px 0;

        span {
            color: #F2613F;
        }
    }
`;

const StatisticsComponent = () => {
    const [statistics, setStatistics] = useState({
        totalMembers: 0,
        newSignups: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStatistics();
            setStatistics(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const fetchStatistics = async () => {
        try {
            const totalMembersResponse = await axios.get('http://localhost:8080/statistics/total-members');
            // const newSignupsResponse = await axios.get('http://localhost:8080/statistics/new-signups');
    
            return {
                totalMembers: totalMembersResponse.data,
                // newSignups: newSignupsResponse.data,
            };
        } catch (error) {
            console.error('Error fetching statistics', error);
            return { totalMembers: 0, newSignups: 0 };
        }
    }

   

    return (
        <GeneralStatisticsWrapper>
            <StatItem>
                <p>Total Members</p>
                <h3><span>{statistics.totalMembers}</span></h3>
            </StatItem>
            <StatItem>
                <p>Club</p>
                <h3><span>5</span></h3>
            </StatItem>
            <StatItem>
                <p>Events</p>
                <h3><span>20</span></h3>
            </StatItem>
            <StatItem>
                <p>New Signups</p>
                <h3><span>{statistics.totalMembers}</span></h3>
            </StatItem>
        </GeneralStatisticsWrapper>
    );
};

export default StatisticsComponent;
