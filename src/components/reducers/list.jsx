import { ADD_TO_CART, REMOVE_ITEM } from "../actions";

export function Cart(state = [], action) {
    switch(action.type){
        case ADD_TO_CART:
            const product = state.find(item => item.id === action.payload.id)
            if (product) {
                action.payload.quantity += 1
                let products = state.filter(item => item.id !== action.payload.id)
                return [...products, product]
            } else {
                action.payload.quantity = 1
                return [...state, action.payload];
            }
            
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
}