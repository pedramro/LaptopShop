export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}