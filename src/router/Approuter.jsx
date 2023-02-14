import React from 'react'
import { Route, Routes } from 'react-router'
import { ChatPage } from '../pages/ChatPage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const Approuter = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<ChatPage />} />
        </Routes>
    )
}
