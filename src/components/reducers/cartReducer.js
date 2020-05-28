import {
  ADD_TO_CART,
  REMOVE_PIZZA,
  LESS_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../funcs/func-types/cart-actions";

const initState = {
  pizzas: [],

  addedpizzas: [],

  total: 0,
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT

  if (action.type === ADD_TO_CART) {
    let addedpizza = state.pizzas.find((pizza) => pizza.id === action.id);

    //check if the action id exists in the addedpizzas

    let existed_pizza = state.addedpizzas.find(
      (pizza) => action.id === pizza.id
    );

    if (existed_pizza) {
      addedpizza.quantity += 1;

      return {
        ...state,

        total: state.total + addedpizza.price,
      };
    } else {
      addedpizza.quantity = 1;

      //calculating the total

      let newTotal = state.total + addedpizza.price;

      return {
        ...state,

        addedpizzas: [...state.addedpizzas, addedpizza],

        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_PIZZA) {
    let pizzaToRemove = state.addedpizzas.find(
      (pizza) => action.id === pizza.id
    );

    let new_pizzas = state.addedpizzas.filter(
      (pizza) => action.id !== pizza.id
    );

    //calculating the total

    let newTotal = state.total - pizzaToRemove.price * pizzaToRemove.quantity;

    console.log(pizzaToRemove);

    return {
      ...state,

      addedpizzas: new_pizzas,

      total: newTotal,
    };
  }

  //INSIDE CART COMPONENT

  if (action.type === ADD_QUANTITY) {
    let addedpizza = state.pizzas.find((pizza) => pizza.id === action.id);

    addedpizza.quantity += 1;

    let newTotal = state.total + addedpizza.price;

    return {
      ...state,

      total: newTotal,
    };
  }

  if (action.type === LESS_QUANTITY) {
    let addedpizza = state.pizzas.find((pizza) => pizza.id === action.id);

    //if the qt == 0 then it should be removed

    if (addedpizza.quantity === 1) {
      let new_pizzas = state.addedpizzas.filter(
        (pizza) => pizza.id !== action.id
      );

      let newTotal = state.total - addedpizza.price;

      return {
        ...state,

        addedpizzas: new_pizzas,

        total: newTotal,
      };
    } else {
      addedpizza.quantity -= 1;

      let newTotal = state.total - addedpizza.price;

      return {
        ...state,

        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,

      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,

      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
