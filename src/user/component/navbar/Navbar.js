import React, { useEffect, useState } from 'react'
import logo from '../../../asset/logo.png'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, getUser } from '../../../state/auth/Action'

const Navbar = () => {
    const auth = useSelector(state => state.auth)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const tokenData = localStorage.getItem("token");
    const token = tokenData ? JSON.parse(tokenData).token : null;
    const navigate = useNavigate()

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    // useEffect hook to get the user data if a token is present
    useEffect(() => {
        if(token) {
            dispatch(getUser())
        }
    }, [dispatch, token])

    // Function to handle user logout
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <div className="container-fluid">
            <div className="row py-3 border-bottom">
                <div className="col-lg-8 col-sm-4 text-center text-sm-start">
                    <Link to="/">
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                {auth?.user ? (
                    <div className="col-lg-4 col-sm-8 d-flex align-items-center justify-content-center justify-content-lg-around mt-4 mt-md-0">
                        <div className="text-end d-none d-xl-block">
                            <span className="fs-6 text-muted fw-medium">For Support</span>
                            <h5 className="">+91 90807060</h5>
                        </div>
                        <ul className="d-flex align-items-center justify-content-end m-0 list-unstyled">
                            <li className="nav-item dropdown">
                                <Link className="rounded-circle bg-light p-2 mx-1" onClick={handleOpen}>
                                    <PersonIcon className="text-muted" />
                                </Link>
                                {isOpen && (
                                    <div className="dropdown-menu show position-absolute" style={{ right: 0 }}>
                                        <Link className="dropdown-item" to="/profile">
                                            Profile
                                        </Link>
                                        <Link className="dropdown-item" onClick={handleLogout} >
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link className="rounded-circle bg-light p-2 mx-1">
                                    <FavoriteIcon className="text-muted" />
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-column gap-2 lh-1 border-0 bg-transparent">
                            <span className="fs-6 text-muted">Your Cart</span>
                            <span className="fs-5 fw-bold">₹ 250</span>
                        </div>
                    </div>
                ) : (
                    <div className="col-lg-4 col-sm-8 d-flex align-items-center justify-content-center justify-content-lg-around mt-4 mt-md-0">
                        <Link to="/login" className="py-2 px-3 rounded-2 text-white fw-bold bg-warning text-decoration-none shadow-sm">
                            Login
                        </Link>
                    </div>
                )}
            </div>
            <Header auth={auth?.user} />
        </div>
    )
}

export default Navbar
