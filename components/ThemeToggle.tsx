import { useContext } from 'react';
import { useTheme  } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}