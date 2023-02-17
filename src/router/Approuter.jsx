import React from 'react'
import { Route, Routes } from 'react-router'
import { ChatPage } from '../pages/ChatPage'
//import { LoginPage } from '../pages/LoginPage'
//import { RegisterPage } from '../pages/RegisterPage'
import { AuthRouter } from './AuthRouter'

export const Approuter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<AuthRouter />} />
            <Route path='/' element={<ChatPage />} />
        </Routes>
    )
}
