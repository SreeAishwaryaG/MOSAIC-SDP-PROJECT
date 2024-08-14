import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import './ArtsDashboard.css'; 

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  background: rgba(255, 255, 255, 0.8); /* White with opacity */
  backdrop-filter: blur(10px); /* Apply blur to the calendar container */
  padding: 10px;
  border-radius: 10px;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  max-width: 200px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1000;
`;

const Artscalendar = ({ events }) => {
  const [value, setValue] = useState(new Date());
  const [tooltip, setTooltip] = useState({ display: false, content: '', left: 0, top: 0 });

  const handleMouseEnter = (e, content) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      display: true,
      content,
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY - 50 // Adjusted to position tooltip above the date
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ display: false, content: '', left: 0, top: 0 });
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsOnDate = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
      if (eventsOnDate.length > 0) {
        return (
          <div
            className="event-indicator-container"
            onMouseEnter={(e) => handleMouseEnter(e, eventsOnDate.map(event => event.name).join(' | '))}
            onMouseLeave={handleMouseLeave}
          >
            {eventsOnDate.map((event, index) => (
              <div key={index} className="event-indicator"></div>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <CalendarContainer>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />
      {tooltip.display && (
        <Tooltip style={{ left: tooltip.left, top: tooltip.top }}>
          {tooltip.content}
        </Tooltip>
      )}
    </CalendarContainer>
  );
};

export default Artscalendar;
