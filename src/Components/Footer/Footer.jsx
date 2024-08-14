// src/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #9B3922; /* Maroon */
  color: #F5E8DC; /* Light Beige */
  padding: 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  width: 100%; /* Ensure full width */
  position: relative;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 20px; /* Add padding to ensure content is not touching the edges */
  box-sizing: border-box; /* Include padding and border in element's total width and height */
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 250px;
`;

const FooterHeading = styled.h4`
  margin-bottom: 10px;
  color: #F5E8DC; /* Light Beige */
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #FFF; /* White */
  display: block;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    color: #F2613F; /* Bright Orange */
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-left:33%;
  margin-top:1rem;
`;

const SocialMediaLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: #F5E8DC; /* Light Beige */
  font-size: 1.5rem;

  &:hover {
    color: #F2613F; /* Bright Orange */
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FooterText = styled.p`
  margin: 0;
  color: #FFF; /* White */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <FooterLinks>
            <li>
              <FooterLink href="https://mail.google.com/">Email</FooterLink>
            </li>
            <li>
              <FooterLink href="tel:12345678">Phone</FooterLink>
            </li>
           
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <li>
              <FooterLink href="/gallery">Gallery</FooterLink>
            </li>
            <li>
              <FooterLink href="/dashboard">Dashboard</FooterLink>
            </li>
            <li>
              <FooterLink href="/profile">Profile Settings</FooterLink>
            </li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialMedia>
            <SocialMediaLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialMediaLink>
          </SocialMedia>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterText>&copy; {new Date().getFullYear()} MOSAIC. All rights reserved.</FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
