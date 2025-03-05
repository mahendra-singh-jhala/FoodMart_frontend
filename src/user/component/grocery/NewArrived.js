import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NewArrivedCard from './NewArrivedCard';
import AliceCarousel from "react-alice-carousel";

const NewArrived = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 1 },
        1024: { items: 2 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)

    const synconSlideChange = ({ item }) => setActiveIndex(item);

    const items = [1, 2, 3, 4, 5, 6].map(() => <NewArrivedCard />)

    return (
        <section className="overflow-hidden py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-between px-4 border-bottom py-1">
                            <h3 className="fs-2 fw-bold ms-5">Newly Arrived Brands</h3>
                            <div className="me-5">
                                <Link className="btn-link text-decoration-none text-muted fw-bold fs-5 me-3">View All Categorie</Link>
                                {activeIndex !== items.length - 2 && items.length > 0 && (
                                    <button type="button" id="cat-prev" className="btn btn-light rounded-3" onClick={slidePrev}><KeyboardArrowLeftIcon /></button>
                                )}
                                {activeIndex !== 0 && items.length > 0 && (
                                    <button type="button" id="cat-next" className="btn btn-light rounded-3" onClick={slideNext}><KeyboardArrowRightIcon /></button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <AliceCarousel
                            items={items}
                            disableButtonsControls
                            responsive={responsive}
                            disableDotsControls
                            onSlideChange={synconSlideChange}
                            activeIndex={activeIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrived
