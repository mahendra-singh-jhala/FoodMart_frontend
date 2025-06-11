import { api } from "../../../config/API"
import { UPDATE_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS } from "./ActionType"

export const updatProfile = (userData) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST })
    try {
        const res = await api.put("/api/users/profileUpdate", userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data
        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: UPDATE_USER_PROFILE_FAILURE, payload: error.message })
    }
} 