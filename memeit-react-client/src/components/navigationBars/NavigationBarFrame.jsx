import { DefaultNavBar, BaseUserNavBar, ModeratorNavBar } from './NavbarVariants';
import { useContext } from 'react';
import { userContext } from '../../context/UserProvider';

const NavigationBarFrame = () => {
    const { user } = useContext(userContext);

    function chooseBar(role) {
        switch (role) {
            case "baseUser":
                console.log("Base");
                return <BaseUserNavBar user={user}/>;
            case "moderator":
                console.log("Mod");
                return <ModeratorNavBar />;
            default:
                console.log("Default");
                return <DefaultNavBar />;
        }
    }

    return <>
        {chooseBar(user?.role)}
    </>;
};

export default NavigationBarFrame;
