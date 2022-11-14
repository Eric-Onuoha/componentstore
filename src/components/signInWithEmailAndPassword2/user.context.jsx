import { useState, createContext, useEffect } from "react";
import { monitorAuthState } from "./signIn.firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const UserProvider = ({children}) => {
    useEffect(() => {
        const unsub = monitorAuthState((user) => {
            if(user != null){
            }
            console.log(user);
        });
    }, [])

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};