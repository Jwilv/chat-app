import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { AuthContext } from '../auth/AuthContext'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'

export const Approuter = () => {

    const {auth, validateToken} = useContext(AuthContext);

    useEffect( ()=>{
        validateToken();
    },[])

    if(auth.checking){
        return <h1>espere</h1>
    }

    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRouter />} />
            <Route path='/' element={<ChatPage />} />
        </Routes>
    )
}
