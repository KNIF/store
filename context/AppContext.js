import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { AppReducer } from './AppReducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, []);

  useEffect(() => {
    // checking if there already is a state in localstorage
    if (localStorage.getItem('cart')) {
      // if yes, update the current state with the stored one
      dispatch({
        type: 'INIT',
        value: JSON.parse(localStorage.getItem('cart')),
      });
    }
  }, []);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
