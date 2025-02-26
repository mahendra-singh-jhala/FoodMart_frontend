import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../user/component/navbar/Navbar'
import Home from '../pages/home/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Footer from '../pages/footer/Footer'
import HeroCarousel from '../pages/home/HeroCarousel'

const UserRoutes = () => {
    return (
        <div>
            <Navbar />
            <HeroCarousel />
            <Routes>
                <Route path="/home/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default UserRoutes
