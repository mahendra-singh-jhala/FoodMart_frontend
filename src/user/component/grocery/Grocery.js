import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../asset/thumb-orange-juice.png'
import { Button } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Grocery = () => {
    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <div className="d-flex justify-content-lg-between border-bottom mb-0">
                                <h3 className="fs-2 fw-bold ms-5">Trending Products</h3>
                                <nav>
                                    <div className="nav nav-tabs border-white" id="nav-tab" title="Tabs">
                                        <Link className="nav-link text-uppercase fs-5 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</Link>
                                        <Link className="nav-link text-uppercase fs-5" id="nav-furite-tab" data-bs-toggle="tab" data-bs-target="#nav-fruite">Fruits & Vegetables</Link>
                                        <Link className="nav-link text-uppercase fs-5" id="nav-drink-tab" data-bs-toggle="tab" data-bs-target="#nav-drink">Drinks</Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                    {[1, 2, 3, 4, 5, 6].map(() => (
                                        <div className="col">
                                            <div className="position-relative p-2 bg-white mb-4 shadow border border-1 rounded-2 text-center">
                                                <div className="bg-body-secondary rounded-3">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="badge bg-success rounded-pill mx-3 mt-3">- 20%</span>
                                                        <Link className="btn-wishlist text-decoration-none text-muted mx-3 mt-3">
                                                            <FavoriteBorderIcon />
                                                        </Link>
                                                    </div>
                                                    <figure>
                                                        <img src={img1} alt="juice" className="img-fluid" style={{ maxHeight: "210px" }} />
                                                    </figure>
                                                </div>
                                                <h3 className="text-capitalize fs-5 fw-semibold text-secondary">orange juice</h3>
                                                <div className="d-flex justify-content-between m-3">
                                                    <span className="fw-bold text-muted">1kg</span>
                                                    <span className="fw-semibold d-flex align-items-center">
                                                        <StarBorderIcon className="text-warning" /> 4.8
                                                    </span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center m-2">
                                                    <span className="fw-bold fs-5">
                                                        ₹ 80
                                                    </span>
                                                    <Button variant="outlined" color="success">
                                                        Add to Cart
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grocery
