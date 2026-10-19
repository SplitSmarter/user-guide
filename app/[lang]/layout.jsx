import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Split Smart Help',
    template: '%s – Split Smart Help'
  },
  description:
    'End-user guide for Split Smart: groups, expenses, settlements, budgets, and UPI.'
}

const I18N = [
  { locale: 'en', name: 'English' },
  { locale: 'hi', name: 'हिंदी' },
  { locale: 'zh', name: '中文' }
]

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  const navbar = (
    <Navbar
      logo={<b>Split Smart Help</b>}
      projectLink="https://github.com/SplitSmarter/user-guide"
    />
  )

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/SplitSmarter/user-guide/tree/main"
          editLink="Edit this page"
          copyPageButton
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<Footer>Split Smart user guide</Footer>}
          i18n={I18N}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
