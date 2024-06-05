import {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [auth, setAuth] = useState('');


    useEffect(() => {
    }, [auth, setAuth])

    return (
        <UserContext.Provider value={[auth, setAuth]}>
            {children}
        </UserContext.Provider>
    );
};
