'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold dark:text-white">My Restaurant</h1>

      <nav className="flex gap-4 items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Language Switch */}
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="text-sm px-2 py-1 rounded border dark:text-white"
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage('pt')}
          className="text-sm px-2 py-1 rounded border dark:text-white"
          aria-label="Switch to Portuguese"
        >
          PT
        </button>
      </nav>
    </header>
  );
};

export default Header;