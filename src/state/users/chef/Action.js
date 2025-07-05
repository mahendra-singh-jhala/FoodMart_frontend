import api from "../../../config/API"
import { UPDATE_USER_PROFILE_FAILURE } from "../user/ActionType"
import { UPDATE_CHEF_PROFILE_REQUEST, UPDATE_CHEF_PROFILE_SUCCESS } from "./ActionType"

export const updatProfile = (chefData) = async (dispatch) => {
    dispatch({ type: UPDATE_CHEF_PROFILE_REQUEST })
    try {
        const res = await api.put("/api/chefs/updateProfile", chefData)
        const data = res.data
        dispatch({ type: UPDATE_CHEF_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_USER_PROFILE_FAILURE, payload: error.message })
    }
}