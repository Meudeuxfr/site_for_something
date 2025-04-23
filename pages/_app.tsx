import { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import '../i18n';
import { useEffect } from 'react';

function ContentWrapper({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <Component {...pageProps} />;
}

export default function MyApp(props: AppProps) {
  return (
    <ThemeProvider>
      <ContentWrapper {...props} />
    </ThemeProvider>
  );
}
