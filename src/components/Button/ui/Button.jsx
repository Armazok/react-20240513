import cls from './Button.module.scss';

export const Button = ({children, ...otherProps}) => {
    return (
        <button className={cls.button} {...otherProps}>
            {children}
        </button>
    );
};
