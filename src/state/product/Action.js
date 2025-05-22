import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"
import { api } from '../../config/API'

// find products
export const findFoodProduct = () => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST })
    try {
        const res = await api.get('/api/product')

        const data = res.data;
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
}

// find a specific product by ID
export const findProductById = (productId) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    try {
        const res = await api.get(`/api/product/id/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data;
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}