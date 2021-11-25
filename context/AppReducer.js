export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.value;
    }

    case 'INC': {
      let changed = false;
      let newState = state;

      if (!newState) newState = [];

      for (let i of newState) {
        if (i.name === action.value.name) {
          i.amount++;
          changed = true;
        }
      }

      if (!changed)
        newState.push({
          name: action.value.name,
          price: action.value.price,
          amount: 1,
        });

      localStorage.setItem('cart', JSON.stringify(newState));

      return newState;
    }

    case 'DEC': {
      let newState = state;

      if (!newState) newState = [];

      for (let i of newState) {
        if (i.name === action.value.name) {
          i.amount--;
        }
      }

      localStorage.setItem('cart', JSON.stringify(newState));

      return newState;
    }

    case 'DEL': {
      let newState = state.filter((item) => item.name !== action.value.name);

      localStorage.setItem('cart', JSON.stringify(newState));

      return newState;
    }

    case 'CLEAR': {
      localStorage.removeItem('cart');

      return [];
    }
  }
};
