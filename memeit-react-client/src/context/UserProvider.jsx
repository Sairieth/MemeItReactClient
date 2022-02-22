import { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';

export const userContext = createContext({ user: null, setUser: () => { } });

const UserProvider = ({ children }) => {
    const [cookies] = useCookies(['JWT']);
    const cookie = cookies.JWT;
    useEffect(() => {
        if (cookie!==undefined) {
            const userInfo = jwt_decode(cookie);
            setUser(userInfo);
        }
    }, [cookie]);

    const [user, setUser] = useState(null);

    return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
};

export default UserProvider;
