import React from 'react'
import img from "../../../asset/icon-soft-drinks-bottle.png"
import { Link } from 'react-router-dom'

const CategoryCard = () => {
    return (
        <div className="row">
            <div className="col g-5">
                <div className="text-center border p-4 rounded shadow mb-4">
                    <Link className="nav-link categorie-item">
                        <img src={img} alt="img1" className="img-fluid" />
                        <h3 className="categories-title fs-5 text-capitalize fw-bold my-2">soft & enrgy drinks</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
