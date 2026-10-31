import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

const mark = readFileSync(join(process.cwd(), 'public/brand/mark-tile-dark-32.png')).toString('base64')

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img src={`data:image/png;base64,${mark}`} width={32} height={32} alt="" />
      </div>
    ),
    { ...size }
  )
}
