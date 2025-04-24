import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl

  // Ignore public files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  // If no locale is set, redirect to default locale 'en'
  if (!locale) {
    const url = request.nextUrl.clone()
    url.locale = 'en'
    return NextResponse.redirect(url)
  }

  return
}
