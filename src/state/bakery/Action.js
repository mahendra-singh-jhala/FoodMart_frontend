import { GET_BAKERY_FAILURE, GET_BAKERY_REQUEST, GET_BAKERY_SUCCESS } from "./ActionType"


export const getBakery = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: GET_BAKERY_REQUEST})
    try {
        const res = await api.get("/api/bakery", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const user = res.data
        dispatch({ type: GET_BAKERY_SUCCESS, payload: user})
    } catch (error) {
        dispatch({ type: GET_BAKERY_FAILURE, payload: error})
    }
}