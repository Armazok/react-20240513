export const List = ({items, renderItem}) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
};
