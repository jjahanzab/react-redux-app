import {
    ADD_TO_CART,
    // ADD_TO_CART_SUCCESS,
    // ADD_TO_CART_FAILURE,
    REMOVE_TO_CART
    // REMOVE_TO_CART_SUCCESS,
    // REMOVE_TO_CART_FAILURE
  } from '../Constants';

const initialState = []

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {cartData: action.data}
      ]
    case REMOVE_TO_CART:
      state.pop();
      return [
        ...state
      ]
    default:
      return state
  }
}
