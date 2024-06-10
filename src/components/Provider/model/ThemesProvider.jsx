import {createContext, useEffect} from 'react';
import {useLocalStorage} from 'customHooks/index.js';

export const ThemeContext = createContext();

export const ThemesProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage({key: 'theme', defData: 'light'});


    useEffect(() => {
        if (theme === 'dark') document.body.classList.add('dark')
        else document.body.classList.remove('dark');
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
