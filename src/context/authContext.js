import React, { useState, createContext } from "react";
// Isnt used for now, but I will set it up in the future.
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ setIsAuthenticated, isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
