import React from 'react'
import img1 from '../../../asset/thumb-orange-juice.png'
import { Button } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'

const GroceryCard = ({ foodProducts }) => {
    return (
        <div className="fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {foodProducts.map((food) => (
                    <div className="col">
                        <div className="position-relative p-2 bg-white mb-4 shadow border border-1 rounded-2 text-center">
                            <div className="bg-body-secondary rounded-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="badge bg-success rounded-pill mx-3 mt-3">-{food.discountPersent}%</span>
                                    <Link className="btn-wishlist text-decoration-none text-muted mx-3 mt-3">
                                        <FavoriteBorderIcon />
                                    </Link>
                                </div>
                                <figure>
                                    <img src={food?.imageUrl} alt="juice" className="img-fluid" style={{ maxHeight: "210px" }} />
                                </figure>
                            </div>
                            <h3 className="text-capitalize fs-5 fw-semibold text-secondary">{food?.title}</h3>
                            <div className="d-flex justify-content-between m-3">
                                <span className="fw-bold text-muted">1kg</span>
                                <span className="fw-semibold d-flex align-items-center">
                                    <StarBorderIcon className="text-warning" /> 4.8
                                </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center m-2">
                                <span className="fw-bold fs-5">
                                    ₹ {food.price}
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
    )
}

export default GroceryCard
