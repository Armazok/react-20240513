export const Heading = ({ level, children, ...otherProps }) => {
    const TagH = `h${level}`;
    return <TagH {...otherProps}>{children}</TagH>;
};

