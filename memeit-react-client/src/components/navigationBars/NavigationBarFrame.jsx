import { DefaultNavBar, BaseUserNavBar, ModeratorNavBar } from './NavbarVariants';
import { useCallback, useContext } from 'react';
import { userContext } from '../../context/UserProvider';
import Cookies from 'universal-cookie';

const NavigationBarFrame = ({tagSetter}) => {
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
                return <BaseUserNavBar user={user} tagSetter={(tag)=>tagSetter(tag)} onLogout={() => onLogout()} />;
            case "moderator":
                return <ModeratorNavBar user={user} tagSetter={(tag)=>tagSetter(tag)} onLogout={() => onLogout()} />;
            default:
                return <DefaultNavBar tagSetter={(tag)=>tagSetter(tag)}/>;
        }
    }, [user, onLogout,tagSetter]);

    return <>
        {chooseBar(user?.role)}
    </>;
};

export default NavigationBarFrame;
