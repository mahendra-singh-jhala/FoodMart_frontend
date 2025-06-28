import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../user/component/navbar/Navbar'
import Home from '../user/pages/home/Home'

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
