import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

const mark = readFileSync(join(process.cwd(), 'public/brand/mark-tile-dark-180.png')).toString('base64')

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img src={`data:image/png;base64,${mark}`} width={180} height={180} alt="" />
      </div>
    ),
    { ...size }
  )
}
