import {useCallback, useState} from 'react';

export const useSelectTab = ({initialState}) => {
    let [selectedTab, setSelectedTab] = useState(initialState);

    const onClickSelectTab = useCallback((id) => {
        setSelectedTab(id);
    }, []);

    return [selectedTab, onClickSelectTab]
}
