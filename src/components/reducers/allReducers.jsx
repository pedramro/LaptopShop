import { Cart } from "./list";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    cart: Cart,
})