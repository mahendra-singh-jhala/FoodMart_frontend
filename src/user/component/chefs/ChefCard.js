import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ChefCard = () => {
    return (
        <div className="position-relative p-2 bg-white mb-4 shadow border border-1 rounded-2 text-center m-3">
            <div className="bg-body-secondary rounded-3">
                <figure>
                    <img src="https://c7589db6ae.mjedge.net/wp-content/uploads/2021/06/Commis-Chef-At-Workstation.jpg" alt="juice" className="img-fluid" style={{ maxHeight: "210px" }} />
                </figure>
            </div>
            <h3 className="text-capitalize fs-5 fw-semibold text-secondary"> Jhon </h3>
            <p> I am five Star hotel chef </p>
            <div className="d-flex justify-content-between m-3 align-content-center">
                <span className="fw-semibold d-flex align-items-center justify-content-between">
                    <StarBorderIcon className="text-warning" /> 4.8
                </span>
                <Link className="btn-wishlist text-decoration-none text-muted">
                    <FavoriteBorderIcon />
                </Link>
            </div>
        </div>
    )
}

export default ChefCard
