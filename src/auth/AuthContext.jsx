import React, { createContext, useCallback, useState } from 'react';
import {fetchWithoToken} from '../helpers/fecht'

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};


export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState(initialState)

    const login = async( email, password ) => {

        const resp = await fetchWithoToken('login', { email, password }, 'POST');
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { id, name, email } = resp;

            setAuth({
                uid: id,
                checking: false,
                logged: true,
                name,
                email,
            });

        }
        
        return resp.ok;

    }

    const register = async(nombre, email, password) => {

    }

    const verificaToken = useCallback( async() => {

    }, [])

    const logout = () => {

    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
