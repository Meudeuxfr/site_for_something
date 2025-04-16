// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
