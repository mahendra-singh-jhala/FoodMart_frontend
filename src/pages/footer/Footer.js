import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import DiamondIcon from '@mui/icons-material/Diamond';
import SavingsIcon from '@mui/icons-material/Savings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Footer = () => {
    return (
        <footer>
            <section className="py-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                        <div className="col">
                            <div className="card my-4 border-0 align-items-center">
                                <LocalShippingIcon className="fs-1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title fs-5 fw-bold">Free Delievery</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card my-4 border-0 align-items-center">
                                <ShieldIcon className="fs-1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title fs-5 fw-bold">100% Secure Payment</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card my-4 border-0 align-items-center">
                                <DiamondIcon className="fs-1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title fs-5 fw-bold">Quality Guarantee</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card my-4 border-0 align-items-center">
                                <SavingsIcon className="fs-1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title fs-5 fw-bold">Guaranted Savings</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card my-4 border-0 align-items-center">
                                <CardGiftcardIcon className="fs-1" />
                                <div className="card-body text-center">
                                    <h4 className="card-title fs-5 fw-bold">Daily Offers</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container-fluid">
                    <div className="row mx-4">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/logo.png" alt="" />
                            <div className="my-5">
                                <a href="" className="btn btn-outline-warning text-dark me-1"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="" className="btn btn-outline-warning text-dark me-1"><i className="fa-brands fa-facebook"></i></a>
                                <a href="" className="btn btn-outline-warning text-dark me-1"><i className="fa-brands fa-instagram"></i></a>
                                <a href="" className="btn btn-outline-warning text-dark me-1"><i className="fa-brands fa-youtube"></i></a>
                                <a href="" className="btn btn-outline-warning text-dark me-1"><i className="fa-brands fa-amazon"></i></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 className="fw-bold">Ultra</h3>
                            <a href="" className="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div className="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 className="fw-bold">Ultra</h3>
                            <a href="" className="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div className="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 className="fw-bold">Ultra</h3>
                            <a href="" className="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" className="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3 className="fw-bold mb-4">Subscribe Us</h3>
                            <p>Subscribe to our newsletter to get updates and grand offers</p>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                    <button type="submit" className="btn btn-warning">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container-fluid">
                    <div className="row mx-3">
                        <div className="col-md-6 mb-1 fw-semibold">
                            <p>&copy; 2023-2024 FoodBazaar. All rights reserved</p>
                        </div>
                        <div className="col-md-6 mb-1 fw-semibold">
                            <p className="text-lg-end">Designed & Developed by<a href="" className="text-decoration-none text-capitalize"> Mahendra Singh Jhala</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
