import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const getUserFromStorage = ()=>{
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
};
    
const setUserInStorage = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
}

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(getUserFromStorage());
    
    useEffect(()=>{
        setUserInStorage(user)
    }, [user]);

    const changeUser = (user) => setUser(user);

    return(
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;