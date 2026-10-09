import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs'
})

export default withNextra({
  reactStrictMode: true
})
