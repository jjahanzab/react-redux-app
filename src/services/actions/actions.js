import {
  ADD_TO_CART,
  // ADD_TO_CART_SUCCESS,
  // ADD_TO_CART_FAILURE,
  REMOVE_TO_CART
  // REMOVE_TO_CART_SUCCESS,
  // REMOVE_TO_CART_FAILURE
} from '../Constants';

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data
  }
}

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  }
}