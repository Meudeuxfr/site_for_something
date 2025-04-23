import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LocaleSwitcher() {
  const { locales, locale: active, asPath } = useRouter()

  return (
    <div className="flex gap-2">
      {locales?.map((loc) => (
        <Link key={loc} href={asPath} locale={loc}>
          <a
            className={`px-2 py-1 rounded ${
              loc === active
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {loc.toUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  );
}