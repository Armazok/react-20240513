export const Button = ({children, ...otherProps}) => {
    return (
        <button {...otherProps}>
            {children}
        </button>
    );
};
