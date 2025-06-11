import { GET_BAKERY_FAILURE, GET_BAKERY_REQUEST, GET_BAKERY_SUCCESS } from "./ActionType"

const initialState = {
    bakery: [],
    isLoading: false,
    error: null
}

export const bakeryReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BAKERY_REQUEST:
            return { ...state, isLoading: true, error: null }
        case GET_BAKERY_SUCCESS:
            return { ...state, isLoading: false, bakery: action.payload,  error: null }
        case GET_BAKERY_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}



