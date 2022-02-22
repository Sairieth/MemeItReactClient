import { DefaultNavBar, BaseUserNavBar, ModeratorNavBar } from './NavbarVariants';
import { useCallback, useContext } from 'react';
import { userContext } from '../../context/UserProvider';
import Cookies from 'universal-cookie';

const NavigationBarFrame = () => {
    const { user, setUser } = useContext(userContext);


    const onLogout = useCallback(() => {
        setUser(null);
        removeCookie();
    },[setUser])

    function removeCookie() {
        const cookies = new Cookies();
        cookies.remove("JWT", { domain: '', path: '/' });
    }

    const chooseBar = useCallback((role) => {
        switch (role) {
            case "baseUser":
                return <BaseUserNavBar user={user} onLogout={() => onLogout()} />;
            case "moderator":
                return <ModeratorNavBar user={user} onLogout={() => onLogout()} />;
            default:
                return <DefaultNavBar />;
        }
    }, [user, onLogout]);

    return <>
        {chooseBar(user?.role)}
    </>;
};

export default NavigationBarFrame;
