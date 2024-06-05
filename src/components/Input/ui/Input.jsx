export const Input = ({label, ...otherProps}) => {
    return (
        <>
            <label>{label}</label>
            <input {...otherProps} />
        </>
    );
};
