import api from '../../config/API'
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST, DELETE_CART_ITEM_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from './ActionType'

// fetch the user cart
export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
        const res = await api.get("/api/cart")
        const data = res.data
        dispatch({
            type: GET_CART_SUCCESS, payload: {
                cartItem: data.cart.cartItem,
                cart: data.cart
            }
        })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}

// add item to the cart
export const addItemToCart = () => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const res = await api.get("/api/cart/add")
        const data = res.data
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

// update the quantity of item in the cart
export const updateCartItem = (cartItemId, quantity) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })
    try {
        const res = await api.put(`/api/cart/${cartItemId}`, { quantity })
        const data = res.data.updatedCartItem
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        dispatch(getCart())
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}

// delete item from the cart
export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: DELETE_CART_ITEM_REQUEST })
    try {
        const res = await api.delete(`/api/cart/${cartItemId}`)
        const data = res.data
        dispatch({ type: DELETE_CART_ITEM_SUCCESS, payload: data })
        dispatch(getCart())
    } catch (error) {
        dispatch({ type: DELETE_CART_ITEM_FAILURE, payload: error.message })
    }
}