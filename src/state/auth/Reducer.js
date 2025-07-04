import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const storedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
    user: storedAuth?.user || null,
    isLoading: false,
    success: false,
    error: null,
    token: storedAuth?.token || null
};


export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading: true, error: null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, success: true, isLoading: false, user: action.payload.user, token: action.payload.token, error: null}

        case GET_USER_SUCCESS:
            return {...state, isLoading: false, user: action.payload.user, error: null }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        case LOGOUT:
            return {...initialState}

        default:
            return state
    }
}