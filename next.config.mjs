import nextra from 'nextra'

const guideBasePath = process.env.GUIDE_BASE_PATH || ''
const staticExport = guideBasePath === '/guide'

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
  contentDirBasePath: '/',
  // Static export has no locale middleware, so page-map links must include /en, /hi, or /zh.
  unstable_shouldAddLocaleToLinks: staticExport
})

const i18n = {
  locales: ['en', 'hi', 'zh'],
  defaultLocale: 'en'
}

const devConfig = {
  reactStrictMode: true,
  i18n,
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
}

const exportConfig = {
  reactStrictMode: true,
  // Nextra reads locales from i18n, then removes the key before Next sees the config.
  i18n,
  basePath: guideBasePath,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default withNextra(staticExport ? exportConfig : devConfig)
