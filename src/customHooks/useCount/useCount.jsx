import {useCallback, useState} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const CountLimits = {
    MIN: 0,
    MAX: 5
};

export const useCount = () => {

    let [count, setCount] = useState(0);

    const plusCount = useCallback(() => {
        setCount(prevCount => {
            if (prevCount < CountLimits.MAX) {
                return ++prevCount;
            }
            return prevCount;
        });
    }, []);

    const minusCount = useCallback(() => {
        setCount(prevCount => {
            if (prevCount > CountLimits.MIN && prevCount <= CountLimits.MAX) {
                return --prevCount;
            }
            return prevCount;
        });
    }, []);


    return {count, plusCount, minusCount};
}
