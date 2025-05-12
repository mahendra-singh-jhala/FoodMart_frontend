import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../user/component/navbar/Navbar'
import Home from '../pages/home/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const UserRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default UserRoutes
