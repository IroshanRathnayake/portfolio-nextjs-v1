'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => {},
  enableDarkMode: () => {},
  disableDarkMode: () => {},
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, isMounted]);

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), []);
  const enableDarkMode = useCallback(() => setIsDarkMode(true), []);
  const disableDarkMode = useCallback(() => setIsDarkMode(false), []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggle, enableDarkMode, disableDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}