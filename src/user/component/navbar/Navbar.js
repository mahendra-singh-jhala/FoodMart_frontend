import React from 'react'
import logo from '../../../asset/logo.png'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Header from './Header'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row py-3 border-bottom">
                <div className="col-lg-8 col-sm-4 text-center text-sm-start">
                    <a>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className="col-lg-4 col-sm-8 d-flex align-items-center justify-content-center justify-content-lg-around mt-4 mt-md-0">
                    <div class="text-end d-none d-xl-block">
                        <span class="fs-6 text-muted fw-medium">For Support</span>
                        <h5 class="">+91 90807060</h5>
                    </div>
                    <ul class="d-flex justify-content-end m-0 list-unstyled">
                        <li>
                            <a href="" class="rounded-circle bg-light p-2 mx-1">
                                <PersonIcon className="text-muted" />
                            </a>
                        </li>
                        <li>
                            <a href="" class="rounded-circle bg-light p-2 mx-1">
                                <FavoriteIcon className="text-muted" />
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex flex-column gap-2 lh-1 border-0 bg-transparent">
                        <span className="fs-6 text-muted">Your Cart</span>
                        <span className="fs-5 fw-bold">₹ 250</span>
                    </div>
                </div>
            </div>
            <Header />
        </div>
    )
}

export default Navbar
