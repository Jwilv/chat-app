import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { AuthContext } from '../auth/AuthContext'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const Approuter = () => {

    const { auth, validateToken } = useContext(AuthContext);

    useEffect(() => {
        validateToken();
    }, [])

    if (auth.checking) {
        return <h1>espere</h1>
    }

    return (
        <Routes>

            <Route path='/auth/*' element={
                <PublicRouter logged={auth.logged}>
                    <AuthRouter />
                </PublicRouter>
            } />

            <Route path='/' element={
                <PrivateRouter logged={auth.logged}>
                    <ChatPage />
                </PrivateRouter>
            } />

        </Routes>
    )
}
