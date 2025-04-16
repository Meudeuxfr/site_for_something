import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} className="mx-2">
        English
      </button>
      <button onClick={() => changeLanguage('pt')} className="mx-2">
        Português
      </button>
    </div>
  );
};

export default LanguageSwitcher;