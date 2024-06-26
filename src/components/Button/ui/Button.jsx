import cls from './Button.module.scss';
import classNames from 'classnames';
import {useTheme} from 'customHooks/useTheme/useTheme.js';
import {THEMES} from 'src/common/themes/themesConstants.js';

export const Button = ({children, disabled, ...otherProps}) => {
    const [theme] = useTheme();

    return (
        <button
            className={classNames(cls.button, {
                [cls.disabled]: disabled,
                [cls.default]: theme === THEMES.defaultTheme,
                [cls.alternateTheme]: theme === THEMES.alternateTheme,
            })}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
