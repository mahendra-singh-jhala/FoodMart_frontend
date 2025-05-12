import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "../state/auth/Reducer"


const rootReducer = combineReducers({
    auth: authReducer // Handles authentication-related state
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))