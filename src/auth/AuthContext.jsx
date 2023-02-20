import React, { createContext, useCallback, useState } from 'react';
import {fetchToken, fetchWithoToken} from '../helpers/fecht'

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

    const register = async(name, email, password) => {
        const resp = await fetchWithoToken('login/new', {name,email,password}, 'POST');
        if( resp.ok ){
            localStorage.setItem('token', resp.token);
            const {id, name, email} = resp;

            setAuth({
                ...auth,
                uid: id,
                name,
                email,
                checking:false,
                logged:true, 
            });

            return true;
        }

        return resp.msg;
    }

    const validateToken = useCallback( async() => {
        const token = localStorage.getItem('token');
        if(!token){
            setAuth({
                checking:false,
                logged:false, 
            });
            return false
        }
        const resp = await fetchToken('login/renew');
        if( resp.ok ){
            localStorage.setItem('token', resp.token);
            const {id, name, email} = resp;

            setAuth({
                uid: id,
                name,
                email,
                checking:false,
                logged:true, 
            });

            return true;
        }else{
            setAuth({
                checking:false,
                logged:false, 
            });
            return false
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking:false,
            logged:false, 
        });
    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            validateToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
