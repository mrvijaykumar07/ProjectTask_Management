import React, { createContext, useState, useEffect } from 'react';
import { GetLocalStorage } from '../Utils/LocalStorage';

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [Userdata, SetUserData] = useState({ students: [], guide: [] });

  useEffect(() => {
    const { students = [], guide = [] } = GetLocalStorage();
    SetUserData({ students, guide });
  }, []);

  return (
    <AuthContext.Provider value={Userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
