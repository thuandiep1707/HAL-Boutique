import { createContext, useState } from "react";

const globalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [ userInfor, setUserInfor] = useState();
    const value = {
        userInfor,
        setUserInfor
    }
    return (
        <globalContext.Provider value={value} >
            {children}
        </globalContext.Provider>
    );
};  
export { GlobalProvider, globalContext }