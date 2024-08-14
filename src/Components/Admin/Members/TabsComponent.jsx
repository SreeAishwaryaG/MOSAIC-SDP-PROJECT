import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TabsContainer = styled.div`
    display: flex;
    background-color: #1F1F1F;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
`;

const Tab = styled.div`
    flex: 1;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.active ? '#F2613F' : '#0C0C0C'};
    color: ${props => props.active ? '#F5F5F5' : '#888888'};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
   
    &:hover {
        background-color: #F2613F;
        color: #F5F5F5;
    }
`;

const TabContent = styled.div`
    background-color: #1F1F1F;
    color: #F5F5F5;
    padding: 20px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal-width columns */
    gap: 20px;
`;

const MemberCard = styled.div`
    background-color: #2E2E2E;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
`;

const Detail = styled.p`
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
`;

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('Arts');
    const [members, setMembers] = useState([]);
    const [memberCount, setMemberCount] = useState(0);
    useEffect(() => {
        // Fetch members based on the active tab
        axios.get(`http://localhost:8080/${activeTab.toLowerCase()}/members`)
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error("Error fetching members", error);
            });


            axios.get(`http://localhost:8080/${activeTab.toLowerCase()}/count`)
            .then(response => {
                setMemberCount(response.data.count);
            })
            .catch(error => {
                console.error("Error fetching member count", error);
            });
    }, [activeTab]);

    const tabs = ['Arts', 'Music', 'Sports', 'Literature','Coding'];

    return (
        <div>
            <TabsContainer>
                {tabs.map(tab => (
                    <Tab
                        key={tab}
                        active={tab === activeTab}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Tab>
                ))}
          
            </TabsContainer>
            <TabContent>
                {members.length > 0 ? (
                    members.map(member => (
                        <MemberCard key={member.id}>
                            <Detail><strong>Name:</strong> {member.fullName}</Detail>
                            <Detail><strong>Email:</strong> {member.email}</Detail>
                            <Detail><strong>Student ID:</strong> {member.studentId}</Detail>
                            <Detail><strong>Department:</strong> {member.department}</Detail>
                            <Detail><strong>Year of Study:</strong> {member.yearOfStudy}</Detail>
                            <Detail><strong>Club Name:</strong> {member.clubName}</Detail>
                        </MemberCard>
                    ))
                ) : (
                    <p>No members found for this club.</p>
                )}
                  {/* <h2>{activeTab} Club Members ({memberCount})</h2> */}
            </TabContent>
        </div>
    );
}

export default TabsComponent;
