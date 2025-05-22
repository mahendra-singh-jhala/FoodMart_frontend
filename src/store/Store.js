import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "../state/auth/Reducer"
import { userFoodProductReducer } from "../state/product/Reducer"


const rootReducer = combineReducers({
    auth: authReducer, // Handles authentication-related state
    foodProducts: userFoodProductReducer // Manages state for food products
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))