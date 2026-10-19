export { middleware } from 'nextra/locales'

export const config = {
  // Matcher ignoring static assets, Next internals, and icons
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.png|icon|icon.png|apple-icon|apple-icon.png|manifest|_pagefind).*)'
  ]
}
