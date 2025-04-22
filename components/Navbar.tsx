import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-black/70 backdrop-blur z-50">
      <h1 className="text-xl font-bold">🍽 My Restaurant</h1>
      <div className="flex gap-4">
        <button onClick={toggleTheme} className="text-sm px-3 py-1 border rounded">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <button onClick={toggleLanguage} className="text-sm px-3 py-1 border rounded">
          🌐 {i18n.language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;