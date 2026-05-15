import { useCallback, useEffect, useState } from 'react';

import { DEFAULT_THEME } from '../../lib/portfolio/constants';

export function useThemePreference() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const nextTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : DEFAULT_THEME;

    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
