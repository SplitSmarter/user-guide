const home = process.env.GUIDE_BASE_PATH ? `${process.env.GUIDE_BASE_PATH}/en/` : '/en'

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>
        <a href={home}>Back to Split Smart Help</a>
      </p>
    </div>
  )
}
