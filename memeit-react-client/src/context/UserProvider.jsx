import { createContext, useEffect, useState } from 'react';

export const userContext = createContext({ user: null, setUser: () => { } });

const UserProvider = ({ children }) => {
    
    useEffect(()=>{
        // read JWT from cookie/local storage
    },[]);

    const [user, setUser] = useState(null);
    
    return <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>;
};

export default UserProvider;
