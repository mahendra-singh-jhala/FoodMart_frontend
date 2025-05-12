import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import GiftImg from '../../../asset/gift.svg'
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ auth }) => {
    const [showOffCanvas, setShowOffCanvas] = useState(false)

    const toggleOffCanvas = () => setShowOffCanvas(!showOffCanvas);

    return (
        <div className="container-fluid">
            {auth && (
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                    <nav className="navbar navbar-expand-lg d-flex">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasnav" onClick={toggleOffCanvas}>
                                <DensitySmallIcon />
                            </button>
                            <div className={`offcanvas offcanvas-end ${showOffCanvas ? 'show' : ''}`}>
                                <div className="offcanvas-header">
                                    <button type="button" className="text-black border-0 rounded-5 py-1" onClick={toggleOffCanvas} >
                                        <CloseIcon />
                                    </button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav list-inline list-unstyled d-flex gap-md-3 mb-0 ms-3">
                                        <li className="list-inline-item active">
                                            <Link to="/" className="nav-link active text-muted fs-6 fw-bold">Home</Link>
                                        </li>
                                        <li className="list-inline-item active">
                                            <Link to="/grocery" className="nav-link active text-muted fs-6 fw-bold">Grocery</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/bakery" className="nav-link text-muted fs-6 fw-bold">Bakery</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/chef" className="nav-link text-muted fs-6 fw-bold">Chefs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="d-none d-lg-block">
                        <a className="nav-link">
                            <img src={GiftImg} alt="giftImg" />
                            <strong className="ms-2 text-dark text-uppercase">get free gift</strong>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
