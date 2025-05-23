import CartItems from "../../../../server/models/cartItem"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./ActionType"

const initialState = {
    cart: null,
    cartItem: [],
    isLoading: false,
    error: null
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case GET_CART_SUCCESS:
            return { ...state, isLoading: false, cartItem: action.payload.cartItem, cart: action.payload.cart,  error: null }
        case GET_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cartItem: [...state.cartItem, action.payload.cartItem] }
        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
    }
}