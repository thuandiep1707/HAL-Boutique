import { createContext, useState } from "react";

const globalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [ userInfor, setUserInfor] = useState({state: false});
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