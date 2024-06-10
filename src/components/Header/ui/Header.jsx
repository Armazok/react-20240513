import {useContext} from 'react';
import {Button} from 'components/Button';
import {AuthComponent} from 'components/AuthComponent';
import {ThemeContext} from 'components/Provider';

export const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return (
        <header>
            Header

            <AuthComponent/>
            <Button onClick={toggleTheme}>Theme Toggle</Button>
        </header>
    );
};
