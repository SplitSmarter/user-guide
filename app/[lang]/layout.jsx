import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../../styles/palette.css'
import '../../styles/nextra-bridge.css'

export const metadata = {
  title: {
    default: 'Split Smarter Help',
    template: '%s – Split Smarter Help'
  },
  description:
    'End-user guide for Split Smarter: groups, expenses, settlements, budgets, and UPI.'
}

const I18N = [
  { locale: 'en', name: 'English' },
  { locale: 'hi', name: 'हिंदी' },
  { locale: 'zh', name: '中文' }
]

/**
 * Head colors must stay aligned with styles/palette.css:
 * - backgroundColor ← --color-bg-primary (#F1F4F8 / #07090E)
 * - color HSL ← --color-accent-sky (#0284C7 / #38BDF8), not emerald
 * Change palette.css first, then update these values to match.
 */
const HEAD_BACKGROUND = {
  light: '#F1F4F8',
  dark: '#07090E'
}

const HEAD_ACCENT = {
  hue: { light: 199, dark: 199 },
  saturation: { light: 98, dark: 90 },
  lightness: { light: 39, dark: 60 }
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  const navbar = (
    <Navbar
      logo={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <img src="/brand/mark-tile-dark.svg" alt="" width={28} height={28} />
          <b>Split Smarter Help</b>
        </span>
      }
    />
  )

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head backgroundColor={HEAD_BACKGROUND} color={HEAD_ACCENT} />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/SplitSmarter/user-guide/tree/main"
          editLink="Edit this page"
          copyPageButton
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={
            <Footer>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="/brand/mark-tile-dark.svg" alt="" width={20} height={20} />
                Split Smarter user guide
              </span>
            </Footer>
          }
          i18n={I18N}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
