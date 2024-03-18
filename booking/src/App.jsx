/* eslint-disable no-unused-vars */
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import contants from './utils/contants';
import openRoutes from './router/openRoutes';
import React from 'react';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {openRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                {/* <Route path='*' element={<Navigate to={contants.Routes.SignUp} replace />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;