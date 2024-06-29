import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: ()=>{}
});

export const ContextProvider = ({children}) => { //defaultValue

    const [user, setUser] = useState({name: 'Elvin Eduardo'}); //initial state
    const [notification, _setNotification] = useState()
    const [token, _setToken] = useState({token: 'f56s45fg6s45fs'}/*localStorage.getItem('ACCESS_TOKEN')*/) //initial state {vacio}, la key es 'ACCESS TOKEN'

    const setNotification = (message)=>{
        _setNotification(message)
        setTimeout(()=> {
            _setNotification('');
        }, 5000)
    }

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
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

//si no tiene default aqui hay que ponerle al import esto: {}