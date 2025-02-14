import React, { useState } from 'react'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import GiftImg from '../../../asset/gift.svg'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false)

    const toggleOffCanvas = () => setShowOffCanvas(!showOffCanvas);

    return (
        <div className="container-fluid">
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
                                <ul class="navbar-nav list-inline list-unstyled d-flex gap-md-3 mb-0 ms-3">
                                    <li class="list-inline-item active">
                                        <a class="nav-link active text-muted fs-6 fw-bold" href="#">Grocery</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="nav-link text-muted fs-6 fw-bold" href="#">Drink</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="nav-link text-muted fs-6 fw-bold" href="#">Bakery</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="nav-link text-muted fs-6 fw-bold" href="#">Chefs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="d-none d-lg-block">
                    <a className="nav-link">
                        <img src={GiftImg} alt="giftImg" />
                        <strong class="ms-2 text-dark text-uppercase">get free gift</strong>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
