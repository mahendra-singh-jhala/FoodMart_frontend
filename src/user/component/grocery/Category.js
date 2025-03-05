import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import AliceCarousel from 'react-alice-carousel';

const Category = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    }

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)

    const synconSlideChange = ({ item }) => setActiveIndex(item);

    const items = [1, 2, 3, 4, 5, 6].map(() => <CategoryCard />)

    return (
        <section className="overflow-hidden py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-between px-4 border-bottom py-1">
                            <h3 className="fs-2 fw-bold ms-4">Category To Choose</h3>
                            <div className="me-5">
                                <Link className="btn-link text-decoration-none text-muted fw-bold fs-5 me-3"> View All Categorie </Link>
                                {activeIndex !== items.length - 5 && items.length > 0 && (
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
                            disableDotsControls
                            responsive={responsive}
                            onSlideChange={synconSlideChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
