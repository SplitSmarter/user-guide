import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'

const generateMdxStaticParams = generateStaticParamsFor('mdxPath')

export async function generateStaticParams() {
  return generateMdxStaticParams()
}

const SITE = 'https://splitsmarter.app'
const LOCALES = ['en', 'hi', 'zh']

function guideTail(mdxPath) {
  const parts = Array.isArray(mdxPath) ? mdxPath : []
  const joined = parts.filter(Boolean).join('/')
  return joined ? `/${joined}/` : '/'
}

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath, params.lang)
  const tail = guideTail(params.mdxPath)
  const canonical = `${SITE}/guide/${params.lang}${tail}`
  const languages = { 'x-default': `${SITE}/guide/en${tail}` }
  for (const locale of LOCALES) {
    languages[locale] = `${SITE}/guide/${locale}${tail}`
  }
  const title = typeof metadata?.title === 'string' ? metadata.title : 'Split Smarter Help'
  const description = typeof metadata?.description === 'string'
    ? metadata.description
    : 'End-user guide for Split Smarter: groups, expenses, settlements, budgets, and places.'
  const image = `${SITE}/brand/og-dark.png`
  return {
    ...metadata,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Split Smarter',
      type: 'article',
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(params.mdxPath, params.lang)

  if (!MDXContent) {
    return null
  }

  return (
    <Wrapper toc={toc ?? []} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
