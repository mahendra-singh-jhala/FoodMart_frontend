import { api } from "../../config/API"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_USER_FAILURE, GET_ORDER_USER_REQUEST, GET_ORDER_USER_SUCCESS } from "./ActionType"

// create an order
export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const res = await api.post('/api/order', { address: reqData.address })
        const data = res.data
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message })
    }
}

// fetch a specific order by ID
export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST })
    try {
        const res = await api.post(`/api/order/${orderId}`)
        const data = res.data
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message })
    }
}

// fetch a all order
export const getOrders = () => async (dispatch) => {
    dispatch({ type: GET_ORDER_USER_REQUEST })
    try {
        const res = await api.post(`/api/order`)
        const data = res.data
        dispatch({ type: GET_ORDER_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ORDER_USER_FAILURE, payload: error.message })
    }
}
