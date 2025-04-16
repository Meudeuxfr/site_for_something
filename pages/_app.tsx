import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;