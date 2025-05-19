import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { heroCarouselData } from '../../data/HeroCarousel/HeroCarousel'
import ads1 from '../../../asset/ad-image-1.png'
import ads2 from '../../../asset/ad-image-2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HeroCarousel = () => {

    const items = heroCarouselData.map((item, index) => (
        <div className="carousel-cell" key={index}>
            <div className="row p-4">
                <div className="col-md-7">
                    <div className="fs-2 fw-semibold text-warning my-3">100% Natural</div>
                    <h3 className=" display-5 text-capitalize fw-bold">{item.title}</h3>
                    <p>{item.summary}</p>
                    <a href="#" className="btn btn-outline-dark btn-lg text-uppercase p-3 mt-2 fs-6">shop now</a>
                </div>
                <div className="col-md-5">
                    <img src={item.img} alt="bannerImg" className="img-fluid" />
                </div>
            </div>
        </div>
    ))

    return (
        <section className="py-3">
            <div className="container-fluid">
                <div className="row ps-3">
                    <div className="large bg-info bg-opacity-10 block-1 col-12 col-lg-7 rounded-4 my-2">
                        <AliceCarousel
                            items={items}
                            disableButtonsControls
                            autoPlay
                            autoPlayInterval={1000}
                            infinite
                        />
                    </div>
                    <div className="col-12 col-lg-5 my-2 me-lg-0">
                        <div className="bg-success bg-opacity-10 my-2 rounded-3 position-relative overflow-hidden">
                            <div className="row p-5">
                                <div className="col-7">
                                    <div className="fs-4 text-muted fw-bold">20% OFF</div>
                                    <h3 className="fw-bold display-5 text-capitalize">Fruits & Vegetables</h3>
                                    <a href="#" className="nav-link text-capitalize">shop collection <ArrowRightAltIcon /> </a>
                                </div>
                                <img src={ads1} alt="adsImg" className="col-5 img-fluid position-absolute bottom-0" style={{ width: "250px", height: "200px", right: "-20px" }} />
                            </div>
                        </div>
                        <div className="bg-danger bg-opacity-10 rounded-3 position-relative mt-3">
                            <div className="row p-5">
                                <div className="col-7">
                                    <div className="fs-4 text-muted fw-bold">15% OFF</div>
                                    <h3 className="fw-bold display-5 text-capitalize">Bakery Products</h3>
                                    <a href="#" className="nav-link text-capitalize">shop collection <ArrowRightAltIcon /> </a>
                                </div>
                                <img src={ads2} alt="adsImg" className="col-5 img-fluid position-absolute bottom-0 end-0" style={{ width: "250px", height: "200px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroCarousel

