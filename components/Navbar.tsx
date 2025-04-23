import { useTheme } from '../context/ThemeContext'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang })
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">🍽️ My Restaurant</h1>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Language Switch */}
        <button
          onClick={() => changeLanguage(locale === 'en' ? 'pt' : 'en')}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {locale === 'en' ? 'PT' : 'EN'}
        </button>

        {/* Login Link */}
        <Link href="/login">
          <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}