// AdminClubsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ClubList from './ClubList';
import AdminHead from '../Adminheader';

const PageWrapper = styled.div`
    background-color: #0C0C0C;
    color: #F5E8DC;
    min-height: 100vh;
    padding: 20px;
`;

const WelcomeMsg = styled.h1`
    background-color: #0C0C0C;
    color: #F2613F;
    text-align: center;
    margin-bottom: 20px;
`;

const AdminClubsPage = () => {
    const [clubs, setClubs] = useState([
        { id: 1, name: 'Music Club', description: 'All about music.' },
        { id: 2, name: 'Art Club', description: 'All about art.' },
        // Add more initial clubs if needed
    ]);
    const [currentClub, setCurrentClub] = useState(null);

    const addClub = (club) => {
        if (club.id === null) {
            club.id = clubs.length + 1;
            setClubs([...clubs, club]);
        } else {
            setClubs(clubs.map((c) => (c.id === club.id ? club : c)));
        }
        setCurrentClub(null);
    };

    const deleteClub = (id) => {
        setClubs(clubs.filter((club) => club.id !== id));
    };

    return (
        <div>
            <AdminHead />
            <PageWrapper>
                <WelcomeMsg>Manage Clubs</WelcomeMsg>
                <ClubList
                    clubs={clubs}
                    setCurrentClub={setCurrentClub}
                    deleteClub={deleteClub}
                    addClub={addClub}
                    currentClub={currentClub}
                />
            </PageWrapper>
        </div>
    );
};

export default AdminClubsPage;
