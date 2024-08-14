import React, { useState } from 'react';
import '../Chatbot/Chatbot.css';
import { FaRobot } from 'react-icons/fa'; // Import the robot icon from Font Awesome

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon-container" onClick={toggleChatbot}>
        <FaRobot className="chatbot-icon" /> {/* Chatbot icon */}
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>MOSAIC Helper</h3>
            <button className="close-btn" onClick={toggleChatbot}>
              &times;
            </button>
          </div>
          <div className="chatbot-body">
            {/* You can integrate a chat service or add chat messages here */}
            <p>Hello! I am Ember. How can I assist you today?</p>
          </div>
          <div className="chatbot-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
