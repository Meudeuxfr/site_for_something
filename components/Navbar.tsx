import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LocaleSwitcher from './LocaleSwitcher';

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
        {/* Login Link */}
        <Link href="/auth/login">
          <button className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition">
            {t('login') /* make sure you have a "login" key in your locale files */}
          </button>
        </Link>

        {/* (Optional) Register Link */}
        <Link href="/auth/register">
          <button className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">
            {t('register')}
          </button>
        </Link>
    </nav>
  )
}