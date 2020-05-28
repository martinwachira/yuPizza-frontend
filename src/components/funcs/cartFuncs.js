import {
  ADD_TO_CART,
  REMOVE_PIZZA,
  LESS_QUANTITY,
  ADD_QUANTITY,
} from "./func-types/cart-actions";

//add cart action

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,

    id,
  };
};

//remove item action

export const removePizza = (id) => {
  return {
    type: REMOVE_PIZZA,

    id,
  };
};

//subtract qt action

export const subtractQuantity = (id) => {
  return {
    type: LESS_QUANTITY,

    id,
  };
};

//add qt action

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,

    id,
  };
};
