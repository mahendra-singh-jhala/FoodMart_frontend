import { api } from "../../config/API"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

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
export const login = (useData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const res = await api.post("/api/auth/login", useData)
        const user = res.data
        if(user) {
            localStorage.setItem("token", JSON.stringify(user))
        }
        dispatch({ type: LOGIN_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
    }
}

// handle for use logout
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.clear()
}
