import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"
import React, { useEffect } from 'react'
import { ThemeProvider, useTheme } from '../context/ThemeContext'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'


function ContentWrapper({ Component, pageProps }: AppProps) {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <Component {...pageProps} />
}

function MyApp(props: AppProps) {
  return (
    <ThemeProvider>
      <ContentWrapper {...props} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)