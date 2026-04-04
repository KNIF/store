import { createContext, useContext, useSyncExternalStore } from 'react';

const ColorModeContext = createContext(undefined);

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

  // sync color mode across browser tabs via storage event
  if (typeof window !== 'undefined') {
    const onStorage = (event) => {
      if (event.key === 'chakra-color-mode') {
        notifyListeners();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => {
      listeners = listeners.filter((l) => l !== callback);
      window.removeEventListener('storage', onStorage);
    };
  }

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

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? light : dark;
}
