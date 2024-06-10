import {useCallback, useState} from 'react';


export const useCount = ({initialState = 0, MIN = 0, MAX}) => {

    let [count, setCount] = useState(initialState);

    const plusCount = useCallback(() => {
        setCount(prevCount => {
            if (prevCount < MAX) {
                return ++prevCount;
            }
            return prevCount;
        });
    }, [MAX]);

    const minusCount = useCallback(() => {
        setCount(prevCount => {
            if (prevCount > MIN && prevCount <= MAX) {
                return --prevCount;
            }
            return prevCount;
        });
    }, [MIN, MAX]);


    return {count, plusCount, minusCount};
}
