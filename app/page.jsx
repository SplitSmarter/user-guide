import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '3rem 1.5rem', maxWidth: 720, margin: '0 auto' }}>
      <h1>Split Smart Help</h1>
      <p>End-user guides for groups, expenses, settlements, budgets, and UPI.</p>
      <p>
        <Link href="/docs/en">Open the English guide →</Link>
      </p>
      <ul>
        <li>
          <Link href="/docs/en">English</Link>
        </li>
        <li>
          <Link href="/docs/hi">हिंदी</Link>
        </li>
        <li>
          <Link href="/docs/zh">中文</Link>
        </li>
      </ul>
    </main>
  )
}
