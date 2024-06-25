import {createContext, useEffect} from 'react';
import {useLocalStorage} from 'customHooks/index.js';
import {THEMES} from 'src/common/themes/themesConstants.js';

export const ThemeContext = createContext();

export const ThemesProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage({key: 'theme', defData: THEMES.defaultTheme});


    useEffect(() => {
        if (theme === THEMES.alternateTheme) document.body.classList.add(THEMES.alternateTheme)
        else document.body.classList.remove(THEMES.alternateTheme);
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
