import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../user/component/navbar/Navbar'
import Home from '../user/pages/home/Home'
import Cart from '../user/component/cart/Cart'

const UserRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default UserRoutes
