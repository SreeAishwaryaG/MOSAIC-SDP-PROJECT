import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StatisticsComponent from './StatisticsComponent';
import ActiveUsers from './ActiveUsers'; // updated import
import Overview from './Overview'; // updated import
import AdminHead from './Adminheader';
import UserCharts from './UserCharts';

const AdminDashboardWrapper = styled.div`
    padding: 20px;
    background-color: #0C0C0C;
    color: #F2613F;
    min-height: 100vh;
`;

const Welcomemsg = styled.h2`
    padding:20px;
    color: #F2613F;
      margin: 0; /* Remove margin-top to ensure proper background coverage */
    background-color: #0C0C0C;
    width: 100%; /* Ensure it spans the full width */
    box-sizing: border-box; /* Include padding in width calculation */
`

const ChartsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width:100%;
`;

const AdminDashboard = () => {
   
    return (
        <div>
            <AdminHead/>
            <Welcomemsg>Welcome to Admin Dashboard</Welcomemsg>
        <AdminDashboardWrapper>
            <StatisticsComponent />
            <ChartsWrapper>
                <ActiveUsers />
                <Overview />
            </ChartsWrapper>
            {/* <UserCharts /> */}
        </AdminDashboardWrapper>
        </div>
    );
}

export default AdminDashboard;
