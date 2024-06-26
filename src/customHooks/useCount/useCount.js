import {useCallback, useState} from 'react';


export const useCount = ({initialState = 0, MIN = 0, MAX}) => {

    let [count, setCount] = useState(initialState);

    const plusCount = useCallback((id) => {
        setCount((prevCounts) => {
            let currentCount = prevCounts[id] || 0;
            if (currentCount < MAX) {
                return {
                    ...prevCounts,
                    [id]: ++currentCount
                };
            }
            return prevCounts;
        });
    }, [MAX]);


    const minusCount = useCallback((id) => {
        setCount((prevCounts) => {
            let currentCount = prevCounts[id] || 0;
            if (currentCount > MIN) {
                return {
                    ...prevCounts,
                    [id]: --currentCount
                };
            }
            return prevCounts;
        });
    }, [MIN]);

    return {count, plusCount, minusCount};
}
