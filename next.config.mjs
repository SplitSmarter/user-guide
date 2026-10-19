import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
  contentDirBasePath: '/'
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hi', 'zh'],
    defaultLocale: 'en'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // Allow Nextra "Copy page" / code-copy clipboard usage
            key: 'Permissions-Policy',
            value: 'clipboard-write=(self)'
          }
        ]
      }
    ]
  }
})
