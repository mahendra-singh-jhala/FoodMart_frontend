import { api } from "../../config/API"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

// handle user registration
export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const res = await api.post("/api/auth/register", userData)
        const data = res.data
        dispatch({ type: REGISTER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
    }
}

// handle user login
export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const res = await api.post("/api/auth/login", userData)
        const user = res.data
        if(user) {
            localStorage.setItem("token", JSON.stringify(user))
        }
        dispatch({ type: LOGIN_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
    }
}

// handle get user 
export const user = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: GET_USER_REQUEST })
    try {
        const res = await api.get("/api/users/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const user = res.data
        dispatch({ type: GET_USER_SUCCESS, payload: user})
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error})
    }
}

// handle for use logout
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.clear()
}
