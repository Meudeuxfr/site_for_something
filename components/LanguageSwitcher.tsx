import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="rounded px-2 py-1 border dark:bg-gray-800 dark:text-white"
    >
      <option value="en">EN</option>
      <option value="pt">PT</option>
    </select>
  );
};

export default LanguageSwitcher;