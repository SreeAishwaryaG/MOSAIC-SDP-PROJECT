import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import userImage from '../assets/avatar-2388584_1280.png';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { UserContext } from '../UserContext'; // Adjust the path as needed

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #F5E8DC;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const WebsiteName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: #0C0C0C;
`;

const NotificationIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationIcon = styled(FaBell)`
  font-size: 24px;
  color: #0C0C0C;
  margin-left:65rem;
`;

const UnreadDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

const NotificationPopup = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 300px;
  background-color: #F5E8DC;
  color: #0C0C0C;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #9B3922;
  z-index: 1000;
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F5E8DC;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  height: 7vh;
  align-items: center;
  padding-left: 8px;
`;

const CloseButton = styled.span`
  cursor: pointer;
  color: #F5E8DC;
  margin-right: 1rem;
`;

const SidebarToggle = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #0C0C0C;
  margin-right: 4%;
`;

const SidebarContainer = styled.div`
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(250px)')}; // Move completely off-screen
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #9B3922; 
  border-left: 1px solid #ddd;
  z-index: 1000;
`;

const SidebarCloseButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #0C0C0C;
  text-align: right;
  padding: 10px;
`;

const SidebarProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #000000;
`;

const SidebarUserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const SidebarUsername = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #0C0C0C;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  padding: 10px;

  color: #0C0C0C;
  cursor: pointer;

 
`;

const LogoutButton = styled.button`
  background-color: #5b1c0e;
  color: #F5E8DC;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 70%;
  text-align: center;
  margin-top: auto;

  &:hover {
    background-color: #D9534F;
  }
`;

const Headbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    'You have a new message.',
    'Your profile was updated.',
    'Music club has posted an event',
  ]);

  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const removeNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <WebsiteName>MOSAIC</WebsiteName>
        </LogoContainer>
        <NotificationIconContainer onClick={toggleNotifications}>
          <NotificationIcon />
          {notifications.length > 0 && <UnreadDot />}
          {isNotificationOpen && (
            <NotificationPopup>
              {notifications.map((notification, index) => (
                <NotificationItem key={index}>
                  <span>{notification}</span>
                  <CloseButton onClick={() => removeNotification(index)}>✖</CloseButton>
                </NotificationItem>
              ))}
            </NotificationPopup>
          )}
        </NotificationIconContainer>
        <SidebarToggle onClick={toggleSidebar}>
          ☰
        </SidebarToggle>
      </Header>


      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarCloseButton onClick={toggleSidebar}>✖</SidebarCloseButton>
        <SidebarProfileContainer>
          <SidebarUserImage src={userImage} alt="User" />
          <SidebarUsername>{user ? `${user.firstName} ${user.lastName}` : 'Guest'}</SidebarUsername>
        </SidebarProfileContainer>
        <SidebarList>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarItem>Dashboard</SidebarItem>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarItem>Profile Settings</SidebarItem>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarItem>Gallery</SidebarItem>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SidebarItem>Blog</SidebarItem>
          </Link>
        </SidebarList>
        <LogoutButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link>
        </LogoutButton>
      </SidebarContainer>
    </>
  );
};

export default Headbar;
