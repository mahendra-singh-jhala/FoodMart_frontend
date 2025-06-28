import loginImg from '../../../asset/banner-image-2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { login, getUser } from '../../../state/auth/Action'
import { useEffect } from 'react'

const Login = () => {
    const dispatch = useDispatch()
    const { isLoading, token, user } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData))
    }

    // useEffect hook to get the user data if a token is present
    useEffect(() => {
        if(token) {
            dispatch(getUser())
        }
    }, [dispatch, token])

    // useEffect hook to handle redirect on role based
    useEffect(() => {
        if(token) {
            if(user?.role === "user") {
                navigate("/")
            } else if (user?.role === "chef") {
                navigate("/chefProfile")
            } else if (user?.role === "bakery") {
                navigate("/bakery")
            }
        }
    }, [token, navigate])

    return (
        <div className="bg-warning bg-gradient min-vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-white d-flex justify-content-between w-50 h-50 shadow rounded-3">
                <div className="w-100 d-none d-lg-block">
                    <img src={loginImg} alt="loginImg" className="img-fluid w-100 h-100 rounded-start-3" />
                </div>
                <div className="rounded-3 w-100 p-4">
                    <h1 className="text-center"> Login </h1>
                    <form onSubmit={handleSubmit} className="p-4">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input
                                type="emai"
                                id="email"
                                name='email'
                                placeholder="Your Email"
                                className="form-control form-control-lg fs-6"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Password"
                                className="form-control form-control-lg fs-6"
                                required
                            />
                        </div>
                        <Link to="/register" className="text-primary link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Don't have an account?</Link>
                        <div className="mb-3 mt-1">
                            <button type="submit" className="btn btn-dark btn-lg w-100">
                                {isLoading ? (
                                    <span>Loading...</span>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
