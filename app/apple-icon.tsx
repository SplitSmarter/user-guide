import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/** Slate brand CTA (#0F172A) — matches styles/palette.css --palette-brand-hex */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F172A',
          color: '#FFFFFF',
          fontSize: 112,
          fontWeight: 700,
          borderRadius: 36
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}
