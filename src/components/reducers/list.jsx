import { ADD_TO_CART, REMOVE_ITEM } from "../actions";

export function Cart(state = [], action) {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
    }
}