import loginImg from '../../../asset/banner-image-2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { register } from '../../../state/auth/Action'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { success, isLoading } = useSelector(state => state.auth)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const userData = {
            username: data.get("username"),
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(register(userData))
    }

    // navigate to the login page
    if (success) {
        navigate('/login')
    }

    return (
        <div className="bg-warning bg-gradient min-vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-white d-flex justify-content-between w-75 h-50 shadow rounded-3">
                <div className="w-100 d-none d-lg-block">
                    <img src={loginImg} alt="loginImg" className="img-fluid w-100 h-100 rounded-start-3" />
                </div>
                <div className="rounded-3 w-100 p-4" onSubmit={handleSubmit}>
                    <h1 className="text-center"> Sign Up </h1>
                    <form className="p-4">
                        <div className="mb-3">
                            <label for="username" className="form-label fw-semibold">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username..."
                                className="form-control form-control-lg fs-6"
                                required
                            />
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label for="firstname" className="form-label fw-semibold">First Name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="first name"
                                    className="form-control form-control-lg fs-6"
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label for="last name" className="form-label fw-semibold">Last Name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="last name"
                                    className="form-control form-control-lg fs-6"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label fw-semibold">Email</label>
                            <input
                                type="emai"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="form-control form-control-lg fs-6"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label fw-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="form-control form-control-lg fs-6"
                                required
                            />
                        </div>
                        <Link to="/login" className="text-primary link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Already have an account?</Link>
                        <div className="mb-3 mt-1">
                            <button type="submit" className="btn btn-dark btn-lg w-100">
                                {isLoading ? (
                                    <span>Loading...</span>
                                ) : (
                                    "Register"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
