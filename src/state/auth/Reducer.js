import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"


const initialState = {
    user: null,
    isLoading: false,
    success: false,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch(action) {
        case REGISTER_REQUEST:
            return {...state, isLoading: true, error: null}
        case REGISTER_SUCCESS:
            return {...state, isLoading: false, user: action.payload.user, error: null}
        case REGISTER_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}