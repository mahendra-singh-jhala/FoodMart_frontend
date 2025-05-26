import { api } from "../../config/API"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"

// create an order
export const createOrder = (reqData) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const res = await api.post('/api/order', { address: reqData.address }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message })
    }
}

// fetch a specific order by ID
export const getOrderById = (orderId) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: GET_ORDER_BY_ID_REQUEST })
    try {
        const res = await api.post(`/api/order/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message })
    }
}

