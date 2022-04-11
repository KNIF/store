// reducer function with actions for mutating cart items
export const CartReducer = (state, action) => {
  // switch on operation type
  switch (action.type) {
    // initialize the cart with passed items
    case "INIT": {
      return action.value;
    }

    // increment the quantity of an item by 1
    case "INC": {
      // store if an item exists in the cart
      let changed = false;

      // copy the current state to a new array
      let newState = state;

      // if current cart does not exist in local storage, create a new empty cart
      if (!newState) newState = [];

      // iterate through the cart and increment the amount of the item with the passed name
      for (let i of newState) {
        if (i.name === action.value.name) {
          i.amount++;
          changed = true;
        }
      }

      // if the item was not found in the cart, add it to the cart instead of increasing its amount by 1
      if (!changed)
        newState.push({
          name: action.value.name,
          price: action.value.price,
          amount: 1,
        });

      // save cart to local storage
      localStorage.setItem("cart", JSON.stringify(newState));

      // return updated cart
      return newState;
    }

    // decrement the quantity of an item by 1
    case "DEC": {
      // copy the current state to a new array
      let newState = state;

      // if current cart does not exist in local storage, create a new empty cart
      if (!newState) newState = [];

      // iterate through the cart and decrement the amount of the item with the passed name
      for (let i of newState) {
        if (i.name === action.value.name) {
          i.amount--;
        }
      }

      // save cart to local storage
      localStorage.setItem("cart", JSON.stringify(newState));

      // return updated cart
      return newState;
    }

    // remove an item from the cart
    case "DEL": {
      // save filtered cart (without the item to be deleted) to a variable
      const newState = state.filter((item) => item.name !== action.value.name);

      // write the new cart (without the item to be deleted) to local storage
      localStorage.setItem("cart", JSON.stringify(newState));

      // return the new cart without the item to be deleted
      return newState;
    }

    // remove all items from the cart
    case "CLEAR": {
      // clear the local storage
      localStorage.removeItem("cart");

      // clear the cart by returning an empty array
      return [];
    }

    // return the current cart
    default: {
      return state;
    }
  }
};
