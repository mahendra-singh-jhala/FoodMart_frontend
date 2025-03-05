import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NewArrivedCard from './NewArrivedCard';

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
                        <NewArrivedCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrived
