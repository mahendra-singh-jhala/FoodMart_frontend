import React from 'react'
import storeImg from '../../../asset/app-store.jpg'
import googleImg from '../../../asset/google-play.jpg'
import phoneImg from '../../../asset/phone.png'
import ads3 from '../../../asset/ad-image-3.png'
import ads4 from '../../../asset/ad-image-4.png'
import { useSelector } from 'react-redux'

const Hero = () => {
    const auth = useSelector(state => state.auth)

    return (
        <section>
            {!auth?.user && (
                <div className="container-fluid">
                    <div className="row bg-success bg-opacity-10 rounded-4 py-5 my-5">
                        <div className="col-md-6">
                            <h2 className="display-4 fw-semibold ms-5 mt-5">Get <span className="text-warning">25% Discount</span> on your first purchase</h2>
                            <p className="ms-5 fs-6 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <form action="" className="">
                                <div className="mb-3">
                                    <label for="name" className="form-label fw-semibold">Name</label>
                                    <input type="text" className="form-control form-control-lg" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label fw-semibold">Email</label>
                                    <input type="emai" className="form-control form-control-lg" id="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-dark btn-lg w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
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
                                        <img src={ads3} alt="adsImg" className="img-fluid" />
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
                                        <img src={ads4} alt="adsImg" className="img-fluid w-75" />
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
                                <img src={phoneImg} alt="phoneImg" className="img-fluid" style={{ marginTop: "-100px", marginBottom: "-100px" }} />
                            </div>
                            <div className="col-md-8 text-center pt-5">
                                <h2 className="fs-2 fw-bold text-dark pt-5 mt-4">Shop Faster With Our FoodBazaar Mobile App</h2>
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

export default Hero
