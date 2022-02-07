import React from 'react';
import { useEffect } from 'react';
import { BaseUserNavBar, ModeratorNavBar, DefaultNavBar } from './components/navigationBars';


const Navbar = ({ user }) => {

    useEffect(() => {
        switch (user.role) {
            case "baseUser":
                return <BaseUserNavBar />
            case "moderator":
                return <ModeratorNavBar />
            default:
                return <DefaultNavBar />
        }
    }, [user.role])
    
    return <DefaultNavBar />;
};

export default Navbar;
