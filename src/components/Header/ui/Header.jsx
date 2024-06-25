import {useContext} from 'react';
import {Button} from 'components/Button';
import {AuthComponent} from 'components/AuthComponent';
import {ThemeContext} from 'components/Provider';
import {THEMES} from 'src/common/themes/themesConstants.js';

export const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === THEMES.defaultTheme ? THEMES.alternateTheme : THEMES.defaultTheme);
    }

    return (
        <header>
            Header

            <AuthComponent/>
            <Button onClick={toggleTheme}>Theme Toggle</Button>
        </header>
    );
};
