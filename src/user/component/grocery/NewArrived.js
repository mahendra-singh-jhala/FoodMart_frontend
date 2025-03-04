import React from 'react'
import img from '../../../asset/product-thumb-11.jpg'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const NewArrived = () => {
    return (
        <section className="overflow-hidden py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-between px-4 border-bottom py-1">
                            <h3 className="fs-2 fw-bold ms-5">Newly Arrived Brands</h3>
                            <div className="me-5">
                                <Link className="btn-link text-decoration-none text-muted fw-bold fs-5 me-3">View All Categorie</Link>
                                <button type="button" id="cat-prev" className="btn btn-light rounded-3"><KeyboardArrowLeftIcon /></button>
                                <button type="button" id="cat-next" className="btn btn-light rounded-3"><KeyboardArrowRightIcon /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
                            {[1, 2, 3, 4, 5].map(() => (
                                <div className="col">
                                    <div className="d-flex border shadow rounded my-3 p-4">
                                        <img src={img} alt="" className="img-fluid rounded" style={{ width: "160px" }} />
                                        <div className="ms-4">
                                            <small className="text-muted fs-6">Amber jar</small>
                                            <h3 className="brand-title fs-5">Honey Best Product for Health</h3>
                                        </div>
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

export default NewArrived
