import React, { useState } from 'react'
import ChefCard from './ChefCard'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AliceCarousel from 'react-alice-carousel';

const Chef = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 }
    }

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)

    const synconSlideChange = ({ item }) => setActiveIndex(item)

    const items = [1, 2, 3, 4, 5, 6].map(() => <ChefCard />)

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-between px-4 border-bottom py-1">
                            <h3 className="fs-2 fw-bold ms-4">Trending Chefs</h3>
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

export default Chef
