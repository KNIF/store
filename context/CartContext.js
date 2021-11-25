import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { CartReducer } from './CartReducer';

// create a global context storing the cart items
const CartContext = createContext();

// global context provider
export function CartWrapper({ children }) {
  // create a reducer to handle the cart state
  const [state, dispatch] = useReducer(CartReducer, []);

  // load the cart items from local storage on initial page render
  useEffect(() => {
    // check if cart items are already stored in local storage
    if (localStorage.getItem('cart')) {
      // if yes, read the cart items from local storage and store them in global context
      dispatch({
        type: 'INIT',
        value: JSON.parse(localStorage.getItem('cart')),
      });
    }
  }, []);

  // access to reducer state and dispatch function from global context
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // return context provider for the cart items
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// react hook to access the cart items from the global context
export const useCartContext = () => useContext(CartContext);
