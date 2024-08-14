import React, { useState } from 'react';
import CertificateForm from './CertificateForm';
import CertificateDisplay from './CertificateDisplay';
import styled from 'styled-components';
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

const AdminCertificatePage = () => {
    const [certificateDetails, setCertificateDetails] = useState(null);

    const handleFormSubmit = (details) => {
        setCertificateDetails(details);
    };

    return (
        <div>
            <AdminHead />
            <PageWrapper>
                <WelcomeMsg>Certificate Generator</WelcomeMsg>
                <CertificateForm onSubmit={handleFormSubmit} />
                {certificateDetails && (
                    <CertificateDisplay
                        name={certificateDetails.name}
                        course={certificateDetails.course}
                        date={certificateDetails.date}
                    />
                )}
            </PageWrapper>
        </div>
    );
};

export default AdminCertificatePage;
