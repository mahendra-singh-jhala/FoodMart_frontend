import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ roles }) => {
    const { isLoading, token, user } = useSelector(state => state.auth)

    if (isLoading) return null;

    if (!token || !roles.includes(user?.role)) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}


export default ProtectedRoute
