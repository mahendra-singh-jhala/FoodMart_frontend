import { updatProfile } from "./Action"
import { UPDATE_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS } from "./ActionType"

const initialState = {
    profile: null,
    isLoading: false,
    success: false,
    error: null,
}

export const  updatProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return { ...state, isLoading: true, error: null }
        case UPDATE_USER_PROFILE_SUCCESS:
            return { ...state, isLoading: false, success: true, profile: action.payload, error: null }
        case UPDATE_USER_PROFILE_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
    }
}