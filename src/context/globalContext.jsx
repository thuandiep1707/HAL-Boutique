import { createContext, useState } from "react";

const globalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [ ctUserID, setCtUserID] = useState(sessionStorage.getItem("userID"));

    function getUserID (){
        setCtUserID(sessionStorage.getItem("userID"))
    }

    const value = {
        ctUserID,
        getUserID
    }

    return (
        <globalContext.Provider value={value} >
            {children}
        </globalContext.Provider>
    );
};  
export { GlobalProvider, globalContext }