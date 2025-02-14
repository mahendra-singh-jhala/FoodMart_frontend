import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section class="py-5">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                        <div class="col">
                            <div class="card my-4 border-0">
                                <i class="fa-solid fa-2x fa-caravan text-center"></i>
                                <div class="card-body text-center">
                                    <h4 class="card-title fs-5 fw-bold">Free Delievery</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-4 border-0">
                                <i class="fa-solid fa-2x fa-shield text-center"></i>
                                <div class="card-body text-center">
                                    <h4 class="card-title fs-5 fw-bold">100% Secure Payment</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-4 border-0">
                                <i class="fa-solid fa-2x fa-gem text-center"></i>
                                <div class="card-body text-center">
                                    <h4 class="card-title fs-5 fw-bold">Quality Guarantee</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-4 border-0">
                                <i class="fa-solid fa-2x fa-piggy-bank text-center"></i>
                                <div class="card-body text-center">
                                    <h4 class="card-title fs-5 fw-bold">Guaranted Savings</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-4 border-0">
                                <i class="fa-solid fa-2x fa-gift text-center"></i>
                                <div class="card-body text-center">
                                    <h4 class="card-title fs-5 fw-bold">Daily Offers</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
                <div class="container-fluid">
                    <div class="row mx-4">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/logo.png" alt="" />
                            <div class="my-5">
                                <a href="" class="btn btn-outline-warning text-dark me-1"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="" class="btn btn-outline-warning text-dark me-1"><i class="fa-brands fa-facebook"></i></a>
                                <a href="" class="btn btn-outline-warning text-dark me-1"><i class="fa-brands fa-instagram"></i></a>
                                <a href="" class="btn btn-outline-warning text-dark me-1"><i class="fa-brands fa-youtube"></i></a>
                                <a href="" class="btn btn-outline-warning text-dark me-1"><i class="fa-brands fa-amazon"></i></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 class="fw-bold">Ultra</h3>
                            <a href="" class="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div class="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 class="fw-bold">Ultra</h3>
                            <a href="" class="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div class="col-md-2 col-sm-6 d-flex flex-column">
                            <h3 class="fw-bold">Ultra</h3>
                            <a href="" class="text-decoration-none fs-6 text-muted">About</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Career</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Public</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Affilate</a>
                            <a href="" class="text-decoration-none fs-6 text-muted">Resourse</a>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h3 class="fw-bold mb-4">Subscribe Us</h3>
                            <p>Subscribe to our newsletter to get updates and grand offers</p>
                            <form action="">
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Your Email" />
                                    <button type="submit" class="btn btn-warning">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="">
                <div class="container-fluid">
                    <div class="row mx-3">
                        <div class="col-md-6 mb-1 fw-semibold">
                            <p>&copy; 2023-2024 FoodBazaar. All rights reserved</p>
                        </div>
                        <div class="col-md-6 mb-1 fw-semibold">
                            <p class="text-lg-end">Designed & Developed by<a href="" class="text-decoration-none text-capitalize"> Mahendra Singh Jhala</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
