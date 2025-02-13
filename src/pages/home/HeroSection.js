import React from 'react'
import bgImage from '../../asset/ad-bg-pattern.png'
import juiceImg from '../../asset/product-thumb-1.png'
import KetchupImg from '../../asset/product-thumb-2.png'
import honeyImg from '../../asset/product-thumb-3.png'

const HeroSection = () => {
    return (
        <section className="py-5" style={{ backgroundImage: `${bgImage}`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-block">
                            <div className="brand-ad large bg-info bg-opacity-10 block-1">
                                <div className="carousel">
                                    <div className="carousel-cell">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="fs-1 text-warning my-3 mb-4">100% Natural</div>
                                                <h3 className=" display-4 text-capitalize">Fresh Smoothie And fress juice</h3>
                                                <p>Healthy drink for hot summer</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase px-4 py-3 mt-3">shop now</a>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={juiceImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="fs-1 text-warning my-3 mb-4">100% Natural</div>
                                                <h3 className=" display-4 text-capitalize">Fresh Smoothie Pure Tomato Ketchup</h3>
                                                <p>Healthy drink for hot summer</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase px-4 py-3 mt-3">shop now</a>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={KetchupImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <div className="row p-5">
                                            <div className="col-md-7">
                                                <div className="fs-1 text-warning my-3 mb-4">100% Natural</div>
                                                <h3 className=" display-4 text-capitalize">Fresh Honey Dabur Honey</h3>
                                                <p>Healthy drink for hot summer</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase px-4 py-3 mt-3">shop now</a>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={honeyImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="brand-ad brand-1 large bg-success bg-opacity-10 block-2">
                                <div className="row p-5">
                                    <div className="col-md-7">
                                        <div className="fs-2 text-muted sale mb-4">20% OFF</div>
                                        <h3 className="fw-bold display-6 text-capitalize">Fruits & Vegetables</h3>
                                        <a href="#" className="nav-link text-capitalize">shop collection <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-ad brand-2 large bg-danger bg-opacity-10 block-3">
                                <div className="row p-5">
                                    <div className="col-md-7">
                                        <div className="fs-2 text-muted sale  mb-4">15% OFF</div>
                                        <h3 className="fw-bold display-6 text-capitalize">Bakery Products</h3>
                                        <a href="#" className="nav-link text-capitalize">shop collection <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

