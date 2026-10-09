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

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={<b>Split Smart Help</b>}
      projectLink="https://github.com/SplitSmarter/user-guide"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/SplitSmarter/user-guide/tree/main"
          editLink="Edit this page"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<Footer>Split Smart user guide</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
