import React, { useState } from 'react';
import styled from 'styled-components';


import AdminHead from '../Adminheader'; // Assuming you have a header component for admin
import TabsComponent from './TabsComponent';

const AdminDashboardWrapper = styled.div`
    padding: 20px;
    background-color: #0C0C0C;
    color: #F2613F;
    min-height: 100vh;
`;

const Welcomemsg = styled.h2`
    padding: 20px;
    color: #F2613F;
    margin-top: 1rem;
    margin-bottom: 3rem;
    background-color: #0C0C0C;
`;

const AdminMembersPage = () => {
   
    return (
        <div>
            <AdminHead />
            <AdminDashboardWrapper>
                <Welcomemsg>Club Members Directory</Welcomemsg>
            
               <TabsComponent/>
              
            </AdminDashboardWrapper>
        </div>
    );
};

export default AdminMembersPage;
