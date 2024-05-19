export const Heading = ({ level, children }) => {
    const TagH = `h${level}`;
    return <TagH>{children}</TagH>;
};

