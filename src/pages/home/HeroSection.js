import React from 'react'
import bgImage from '../../asset/ad-bg-pattern.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { heroCarouselData } from '../../data/HeroCarousel/HeroCarousel'
import ads1 from '../../asset/ad-image-1.png'
import ads2 from '../../asset/ad-image-2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import storeImg from '../../asset/app-store.jpg'
import googleImg from '../../asset/google-play.jpg'
import phoneImg from '../../asset/phone.png'

const HeroSection = () => {

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
        <section className="py-5" style={{ backgroundImage: `${bgImage}`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: "1" }}>
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
            <div className="container-fluid py-4">
                <div className="row bg-success bg-opacity-10 rounded-4 py-5 my-5">
                    <div className="col-md-6">
                        <h2 className="display-4 fw-semibold ms-5 mt-5">Get <span className="text-warning">25% Discount</span> on your first purchase</h2>
                        <p className="ms-5 fs-6 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-md-6 p-5">
                        <form action="" className="">
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control form-control-lg" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="emai" className="form-control form-control-lg" id="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label for="checkbox" className="form-label">
                                    <input type="checkbox" className="form-check-input p-2" id="checkbox" />
                                    Subscribe to our newsletter
                                </label>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-dark btn-lg w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="bg-success bg-opacity-10 rounded-4">
                            <div className="row p-5">
                                <div className="col-md-7">
                                    <div className="fs-1 text-warning sale mb-4">Upto 20% Off</div>
                                    <h3 className="fs-2 fw-bold text-capitalize">Luxa Dark Chocolate</h3>
                                    <p>Very tasty Chocolate flavour</p>
                                    <a href="#" className="btn btn-dark btn-lg text-capitalize">shop now</a>
                                </div>
                                <div className="col-md-5">
                                    <figure>
                                        <img src="images/ad-image-3.png" alt="" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-danger bg-opacity-10 rounded-4">
                            <div className="row p-5">
                                <div className="col-md-7">
                                    <div className="fs-1 text-warning sale mb-4">Upto 25% Off</div>
                                    <h3 className="fs-2 fw-bold text-capitalize">Creamy Muffins</h3>
                                    <p>Very tasty Vanilla flavour</p>
                                    <a href="#" className="btn btn-dark btn-lg text-capitalize">shop now</a>
                                </div>
                                <div className="col-md-5">
                                    <figure>
                                        <img src="images/ad-image-4.png" alt="" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 mt-5">
                    <div className="bg-danger bg-opacity-10 rounded-5 mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={phoneImg} alt="phoneImg" className="img-fluid" style={{ marginTop: "-140px", marginBottom: "-140px"}} />
                                </div>
                                <div className="col-md-8 text-center mt-5 pt-5">
                                    <h2 className="fs-2 fw-bold text-dark my-5">Shop Faster With Our FoodBazaar Mobile App</h2>
                                    <p className="fs-6 my-5">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center my-5">
                                        <img src={storeImg} alt="storeImg" className="img-fluid" />
                                        <img src={googleImg} alt="googleImg" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default HeroSection

