import React from 'react';
import { Route, Routes } from 'react-router';

import '../css/login-register.css';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRouter = () => {
    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        <Route exact path="/auth/login" element={<LoginPage />} />
                        <Route exact path="/auth/register" element={<RegisterPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}