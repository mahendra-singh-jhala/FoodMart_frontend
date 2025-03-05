import React from 'react'
import img from "../../../asset/icon-soft-drinks-bottle.png"
import { Link } from 'react-router-dom'

const CategoryCard = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {[1, 2, 3, 4, 5].map(() => (
                <div className="col">
                    <div className="text-center my-2 border p-4 rounded shadow my-4">
                        <Link className="nav-link categorie-item">
                            <img src={img} alt="img1" className="img-fluid" />
                            <h3 className="categories-title fs-5 text-capitalize fw-bold my-2">soft & enrgy drinks</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryCard
