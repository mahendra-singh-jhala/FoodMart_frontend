import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const BackeryCard = () => {
    return (
        <div className="position-relative p-2 bg-white mb-4 shadow border border-1 rounded-2 text-center m-3">
            <div className="bg-body-secondary rounded-3">
                <figure>
                    <img src="https://img.freepik.com/free-photo/various-cakes-supermarket-shelves-sale_627829-7332.jpg?t=st=1741235977~exp=1741239577~hmac=9b5baa54770bdbcfb210060debfc3eba46cce1fd9780b068a6fd5dc1653d7323&w=1380" alt="juice" className="img-fluid" style={{ maxHeight: "210px" }} />
                </figure>
            </div>
            <h3 className="text-capitalize fs-5 fw-semibold text-secondary">Sweet Backery</h3>
            <p> This Backery is good </p>
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

export default BackeryCard
