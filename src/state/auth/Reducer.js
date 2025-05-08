import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"


const initialState = {
    user: null,
    isLoading: false,
    success: false,
    error: null,
    token: null
}

export const authReducer = (state = initialState, action) => {
    switch(action) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return {...state, isLoading: true, error: null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, user: action.payload.user, token: action.payload.token, error: null}

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        case LOGOUT:
            return {...initialState}

        default:
            return state
    }
}