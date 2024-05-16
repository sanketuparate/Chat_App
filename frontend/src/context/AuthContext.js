import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

// Create the context provider component
const AuthContextProvider = ({ children }) => {
  // State to manage authentication user
  const [authUser, setAuthUser] = useState(() => JSON.parse(localStorage.getItem('chat-user')) || null);

  // Provide the authUser state and setAuthUser function to the context value
  const contextValue = { authUser, setAuthUser };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the context and provider
export { AuthContext, AuthContextProvider };
