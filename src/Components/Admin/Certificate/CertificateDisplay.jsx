import React, { useRef } from 'react';
import styled from 'styled-components';
import { toPng } from 'html-to-image';
import logo from './logo.png'; // Update this with the path to your logo

const CertificateWrapper = styled.div`
    background-color: #F5E8DC;
    border: 2px solid #0C0C0C;
    padding: 20px;
    border-radius: 8px;
    color: #0C0C0C;
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
    position:relative;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 20px;
`;

const CertificateTitle = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
    color: #481E14;
`;

const CertificateContent = styled.div`
    font-size: 1.2em;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #F2613F;
    color: #F5E8DC;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #D9534F;
    }
`;

const CertificateDisplay = ({ name, course, date }) => {
    const certificateRef = useRef();

    const downloadCertificate = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'certificate.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.error('Failed to download image', err);
                });
        }
    };

    return (
        <div>
            <CertificateWrapper ref={certificateRef}>
                <Logo src={logo} alt="Logo" />
                <CertificateTitle>Certificate of Completion</CertificateTitle>
                <CertificateContent>
                    This is to certify that <strong>{name}</strong> has successfully completed the activity <strong>{course}</strong> on <strong>{date}</strong>.
                </CertificateContent>
            </CertificateWrapper>
            <Button onClick={downloadCertificate}>Download Certificate</Button>
        </div>
    );
};

export default CertificateDisplay;
