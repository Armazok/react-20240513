import {useContext} from 'react';
import {ThemeContext} from 'components/Provider';

export const useTheme = () => {
    return useContext(ThemeContext);
}
