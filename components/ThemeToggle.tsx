import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-xl transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;