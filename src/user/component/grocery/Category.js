import React from 'react'
import img from "../../../asset/icon-soft-drinks-bottle.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <section className="overflow-hidden py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-between px-4 border-bottom py-1">
                            <h3 className="fs-2 fw-bold ms-4">Category To Choose</h3>
                            <div className="me-5">
                                <Link className="btn-link text-decoration-none text-muted fw-bold fs-5"> View All Categorie </Link>
                                <button type="button" id="cat-prev" className="btn btn-light rounded-3"><KeyboardArrowLeftIcon /></button>
                                <button type="button" id="cat-next" className="btn btn-light rounded-3"><KeyboardArrowRightIcon /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
