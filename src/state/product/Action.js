import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"
import api  from '../../config/API'

// create product
export const createFoodProduct = (FoodData) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    try {
        const res = await api.post('/api/product', { FoodData })
        const data = res.data
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
    }
}

// find all products
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
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    try {
        const res = await api.get(`/api/product/id/${productId}`)
        const data = res.data;
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}