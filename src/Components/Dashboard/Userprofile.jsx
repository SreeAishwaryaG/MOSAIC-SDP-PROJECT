import React, { useContext, useState, useEffect } from 'react';
import { FaUser, FaHome, FaEdit } from 'react-icons/fa';
import '../Dashboard/Userprofile.css'; 
import Headbar from './Headbar';
import { UserContext } from '../UserContext';
import axios from 'axios';

const ProfilePage = () => {
    const { user, updateUser } = useContext(UserContext); 
    const [isEditing, setIsEditing] = useState(false);
    const [userProfile, setUserProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        institution: '',
        gender: '',
        degree: '',
        address: ''
    });


    const fetchProfile = () => {
        if (user && user.email) {
            console.log('Fetching profile for:', user.email);
            axios.get(`http://localhost:8080/profile/getProfile?email=${user.email}`)
                .then(response => {
                    setUserProfile(response.data);
                    
                    localStorage.setItem('profile', JSON.stringify(response.data));
                })
                .catch(error => console.error('Error fetching profile:', error));
        }
    };
    useEffect(() => {
        console.log('useEffect triggered');
        fetchProfile();
    }, [user]);
    
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        axios.post('http://localhost:8080/profile/createOrUpdate', userProfile)
            .then(response => {
                setUserProfile(response.data);
                localStorage.setItem('profile', JSON.stringify(response.data));
                setIsEditing(false);
            })
            .catch(error => console.error('Error updating profile:', error));
    };

    const handleInputChange = (e) => {
        setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Headbar />
            <div className="profile-page">
                <div className="profile-header">
                    <FaUser className="profile-icon" />
                    <h2>User Profile</h2>
                </div>
                <div className="profile-details">
                    <FaEdit className="edit-icon" onClick={handleEditClick} />
                    <div className="profile-item">
                        <span className="profile-label">First Name:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="firstName"
                                value={userProfile.firstName || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.firstName}</span>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Last Name:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="lastName"
                                value={userProfile.lastName || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.lastName || 'N/A'}</span>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Email:</span>
                        <span className="profile-value">{userProfile.email || 'N/A'}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Phone Number:</span>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={userProfile.phoneNumber || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.phoneNumber || 'N/A'}</span>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Institution:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="institution"
                                value={userProfile.institution || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.institution || 'N/A'}</span>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Gender:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="gender"
                                value={userProfile.gender || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.gender || 'N/A'}</span>
                        )}
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Degree:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="degree"
                                value={userProfile.degree || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.degree || 'N/A'}</span>
                        )}
                    </div>
                </div>
                <div className="profile-address">
                    <FaHome className="address-icon" />
                    <div className="address-details">
                        <span className="profile-label">Address:</span>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={userProfile.address || ''}
                                onChange={handleInputChange}
                                className="edit-input"
                            />
                        ) : (
                            <span className="profile-value">{userProfile.address || 'N/A'}</span>
                        )}
                    </div>
                </div>
                {isEditing && (
                    <button className="save-button" onClick={handleSaveClick}>
                        Save
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
