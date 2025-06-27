import { CREATE_BAKERY_FAILURE, CREATE_BAKERY_REQUEST, CREATE_BAKERY_SUCCESS, GET_BAKERY_FAILURE, GET_BAKERY_REQUEST, GET_BAKERY_SUCCESS } from "./ActionType"

export const createBakery = (bakeryData) => async (dispatch) => {
    dispatch({ type: CREATE_BAKERY_REQUEST })
    try {
        const res = await api.post("/api/bakery", { bakeryData })
        const bakery = res.data
        dispatch({ type: CREATE_BAKERY_SUCCESS, payload: bakery })
    } catch (error) {
        dispatch({ type: CREATE_BAKERY_FAILURE, payload: error })
    }
}

export const getBakery = () => async (dispatch) => {
    dispatch({ type: GET_BAKERY_REQUEST})
    try {
        const res = await api.get("/api/bakery")
        const bakery = res.data
        dispatch({ type: GET_BAKERY_SUCCESS, payload: bakery })
    } catch (error) {
        dispatch({ type: GET_BAKERY_FAILURE, payload: error })
    }
}