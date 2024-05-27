export const Counter = ({count, minusCount, plusCount}) => {
    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px'
        }}>
            <div style={{cursor: 'pointer', fontSize: '30px', userSelect: 'none'}} onClick={plusCount}>+</div>
            <span style={{fontSize: '30px'}}>{count}</span>
            <div style={{cursor: 'pointer', fontSize: '30px', userSelect: 'none'}} onClick={minusCount}>-</div>
        </div>
    );
};
