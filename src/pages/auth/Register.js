import React from 'react'
import loginImg from '../../asset/banner-image-2.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="bg-warning bg-gradient min-vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-white d-flex justify-content-between w-75 h-50 shadow rounded-3">
                <div className="w-100 d-none d-lg-block">
                    <img src={loginImg} alt="loginImg" className="img-fluid w-100 h-100 rounded-start-3" />
                </div>
                <div className="rounded-3 w-100 p-4">
                    <h1 className="text-center"> Sign Up </h1>
                    <form action="" className="p-4">
                        <div className="mb-3">
                            <label for="text" className="form-label fw-semibold">Username</label>
                            <input type="text" className="form-control form-control-lg fs-6" id="text" placeholder="Username" />
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label for="firstname" className="form-label fw-semibold">First Name</label>
                                <input type="text" className="form-control form-control-lg fs-6" id="firstname" placeholder="first name" />
                            </div>
                            <div className="col-6">
                                <label for="last name" className="form-label fw-semibold">Last Name</label>
                                <input type="text" className="form-control form-control-lg fs-6" id="last name" placeholder="last name" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label fw-semibold">Email</label>
                            <input type="emai" className="form-control form-control-lg fs-6" id="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label fw-semibold">Password</label>
                            <input type="password" className="form-control form-control-lg fs-6" id="password" placeholder="Password" />
                        </div>
                        <Link to="/login" className="text-primary link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Already have an account?</Link>
                        <div className="mb-3 mt-1">
                            <button type="submit" className="btn btn-dark btn-lg w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
