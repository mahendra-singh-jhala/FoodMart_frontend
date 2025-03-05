import React from 'react'
import { Link } from 'react-router-dom'
import Category from './Category';
import NewArrived from './NewArrived';
import GroceryCard from './GroceryCard';

const Grocery = () => {
    return (
        <section className="py-5">
            <Category />
            <NewArrived />
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
                            <GroceryCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grocery
