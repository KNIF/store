import { createContext, useContext, useSyncExternalStore } from 'react';

const ColorModeContext = createContext();

function getColorModeSnapshot() {
  const stored = localStorage.getItem('chakra-color-mode');
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

function getColorModeServerSnapshot() {
  return 'dark';
}

let listeners = [];
function subscribeColorMode(callback) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function notifyListeners() {
  listeners.forEach((l) => l());
}

export function ColorModeProvider({ children }) {
  const colorMode = useSyncExternalStore(
    subscribeColorMode,
    getColorModeSnapshot,
    getColorModeServerSnapshot
  );

  const toggleColorMode = () => {
    const next = colorMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('chakra-color-mode', next);
    notifyListeners();
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? light : dark;
}
