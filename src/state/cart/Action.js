import { api } from '../../config/API'
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from './ActionType'

// fetch the user cart
export const getCart = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: GET_CART_REQUEST })
    try {
        const res = await api.get("/api/cart", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = res.data
         dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: {
            cartItem: data.cart.cartItem,
            cart: data.cart
        }})
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}

// add item to the cart
export const addItemToCart = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const res = await api.get("/api/cart/add", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = res.data
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}