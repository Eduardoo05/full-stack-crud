import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({children}) => { //defaultValue

    const [user, setUser] = useState({
        name: 'Eduardo Franco'
    }); //initial state
    const [token, _setToken] = useState(null/*localStorage.getItem('ACCESS_TOKEN')*/) //initial state {vacio}, la key es 'ACCESS TOKEN'

    const setToken = (token) => {
        _setToken(token)
        if (token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);