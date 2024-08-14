import React, { useState } from 'react';

const FaqComponent = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const handleFaqClick = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqData = [
    {
      question: "What is this website about?",
      answer: "This website helps manage college clubs, allowing members to join, participate in events, and stay updated with club activities."
    },
    {
      question: "How can I join a club?",
      answer: "You can join a club by visiting the 'Clubs' section, selecting your preferred club, and clicking on the 'Join Club' button."
    },
    {
      question: "How do I contact club administrators?",
      answer: "You can contact club administrators via the 'Contact' page, where you can find their email addresses and phone numbers."
    },
    {
      question: "Where can I find information about upcoming events?",
      answer: "Upcoming events are listed in the 'Events' section. You can also find them highlighted on the homepage."
    },
    {
      question: "How do I update my profile information?",
      answer: "You can update your profile information by navigating to the 'Profile Settings' in the sidebar."
    },
  ];

  const styles = {
    faqSection: {
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: '20px'
    },
    faqHeading: {
      fontSize: '24px',
      color: '#481E14',
      textAlign: 'center',
      marginBottom: '20px',
    },
    faqContent: {
      maxWidth: '800px',
      margin: '10px auto',
    },
    faqItem: {
      padding: '5px 0px',
    },
    faqQuestion: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 20px',
      backgroundColor: '#F5E8DC',
      borderTop: '1px solid #9a7167',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
    faqQuestionText: {
      fontSize: '18px',
      color: '#481E14',
    },
    faqToggleIcon: {
      fontSize: '18px',
      color: '#481E14',
    },
    faqAnswer: {
      padding: '10px 20px',
      backgroundColor: '#F5E8DC',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      textAlign: 'justify',
      
    },
  };

  return (
    <section style={styles.faqSection}>
      <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
      <div style={styles.faqContent}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div style={styles.faqQuestion} onClick={() => handleFaqClick(index)}>
              <span style={styles.faqQuestionText}>{faq.question}</span>
              <span style={styles.faqToggleIcon}>{faqOpen === index ? '−' : '+'}</span>
            </div>
            {faqOpen === index && (
              <div style={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqComponent;
