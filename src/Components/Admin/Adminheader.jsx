import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import userImage from '../assets/avatar-2388584_1280.png';
import { Link } from 'react-router-dom';
import './Adminhead.css';


const SidebarContainer = styled.div`
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #F5E8DC;
`;
const LogoutButton = styled.button`
  background-color: #F2613F;
  color: #F5E8DC;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-top: 10 rem;
  
  &:hover {
    background-color: #D9534F;
  }
`;

const AdminHead = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        
        </div>
      
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      </header>
      <SidebarContainer isOpen={isSidebarOpen} className="sidebar">
        <div className="close-sidebar" onClick={toggleSidebar}>
          ✖
        </div>
        <ProfileContainer>
          <UserImage src={userImage} alt="User" />
          <Username>Admin</Username>
        </ProfileContainer>
        <ul className="sidebar-list">
        
            <Link to="/admin">
            <li className="sidebar-item">Dashboard</li>
            </Link>
         
            <Link to="/admin-members">
            <li className="sidebar-item">Members</li>
            </Link>

            <Link to="/admin-events">
            <li className="sidebar-item">Events</li>
            </Link>           
            
             <Link to="/admin-clubs">
            <li className="sidebar-item">Clubs</li>
            </Link>
            <Link to="/admin-certificate">
            <li className="sidebar-item">Certificate</li>
            </Link>
        
          
          <LogoutButton>
          <Link to="/" className="logout-button">Logout</Link>
          </LogoutButton>

        </ul>
      </SidebarContainer>
    </div>
  );
};

export default AdminHead;
