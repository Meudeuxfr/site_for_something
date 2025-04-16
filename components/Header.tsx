'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold dark:text-white">My Restaurant</h1>
      <nav className="flex gap-4">
        <button onClick={toggleDarkMode} className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
          🌙 Toggle Dark
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('pt')}>PT</button>
      </nav>
    </header>
  );
};

export default Header;