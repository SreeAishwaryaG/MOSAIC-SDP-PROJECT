import React, { useState } from 'react';
import './QuizPop.css';

const QuizPop = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [recommendedClub, setRecommendedClub] = useState('');

  const questions = [
    {
      question: "Which activity do you enjoy the most?",
      options: ["Drawing/Painting", "Reading/Writing", "Playing Sports", "Playing Music", "Coding"],
    },
    {
      question: "What type of events do you prefer to attend?",
      options: ["Art Exhibitions", "Book Readings", "Sports Events", "Concerts", "Hackathons"],
    },
    {
      question: "Which subject did you like the most in school?",
      options: ["Art", "Literature", "Physical Education", "Music", "Computer Science"],
    },
    {
      question: "What would you like to do in your free time?",
      options: ["Visit an Art Gallery", "Read a Novel", "Play a Sport", "Learn a New Instrument", "Develop an App"],
    },
    {
      question: "Which club activity sounds the most exciting to you?",
      options: ["Art Workshops", "Literary Discussions", "Sports Tournaments", "Music Jams", "Coding Competitions"],
    },
    {
      question: "What is your preferred mode of creative expression?",
      options: ["Visual Arts", "Written Word", "Physical Activity", "Musical Performance", "Programming"],
    },
  ];

  const handleAnswer = (index, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [index]: answer }));
    if (index < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      calculateRecommendation();
    }
  };

  const calculateRecommendation = () => {
    const counts = {
      "Arts Club": 0,
      "Literature Club": 0,
      "Sports Club": 0,
      "Music Club": 0,
      "Coding Club": 0,
    };

    for (let answer of Object.values(selectedAnswers)) {
      if (answer.includes("Art")) counts["Arts Club"]++;
      if (answer.includes("Literature") || answer.includes("Reading") || answer.includes("Written")) counts["Literature Club"]++;
      if (answer.includes("Sports") || answer.includes("Physical")) counts["Sports Club"]++;
      if (answer.includes("Music") || answer.includes("Musical")) counts["Music Club"]++;
      if (answer.includes("Coding") || answer.includes("Programming")) counts["Coding Club"]++;
    }

    const recommended = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setRecommendedClub(recommended);
    setStep(step + 1);
  };

  const handleStartQuiz = () => {
    setStep(1);
  };

  return (
    <div className="quiz-pop">
      <div className="quiz-content">
        <button className="close-button" onClick={onClose}>×</button>
        {step === 0 && (
          <div className="quiz-info">
            <h2>Welcome to the Club Recommendation Quiz!</h2>
            <p>This quiz will help us recommend the best club for you based on your interests.</p>
            <button className="start-quiz-button" onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        )}
        {step > 0 && step <= questions.length && (
          <div className="quiz-question">
            <h2>Question {step}</h2>
            <p>{questions[step - 1].question}</p>
            <div className="quiz-options">
              {questions[step - 1].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(step - 1, option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === questions.length + 1 && (
          <div className="quiz-recommendation">
            <h2>Recommended Club</h2>
            <p>Based on your answers, we recommend you join the <strong>{recommendedClub}</strong>.</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPop;
