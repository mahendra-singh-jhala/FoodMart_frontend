import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk } from "redux-thunk"
import { authReducer } from "../state/auth/Reducer"
import { userFoodProductReducer } from "../state/product/Reducer"
import { cartReducer } from "../state/cart/Reducer"
import { orderReducer } from "../state/order/Reducer"


const rootReducer = combineReducers({
    auth: authReducer, // Handles authentication-related state
    foodProducts: userFoodProductReducer, // Manages state for food products
    cart: cartReducer,  // Manages the shopping cart state
    order: orderReducer,  // Handles order-related state
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))