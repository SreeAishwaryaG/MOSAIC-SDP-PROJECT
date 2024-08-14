import React, { createContext, useState, useContext } from 'react';

const JoinContext = createContext();

export const JoinProvider = ({ children }) => {
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <JoinContext.Provider value={{ hasJoined, setHasJoined }}>
      {children}
    </JoinContext.Provider>
  );
};

export const useJoin = () => useContext(JoinContext);
