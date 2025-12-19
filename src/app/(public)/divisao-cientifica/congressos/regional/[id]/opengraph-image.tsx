/** biome-ignore-all lint/performance/noImgElement: needed */

import { getRegionalCongressById } from '@http/congress/regional/get-regional-congress-by-id'
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

interface IImageProps {
  params: Promise<{ id: string }>
}

export default async function Image({ params }: IImageProps) {
  const { id } = await params

  const congress = await getRegionalCongressById(id)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#111',
      }}
    >
      <h1
        style={{
          color: '#fff',
          fontSize: '5rem',
          fontWeight: 'bold',
        }}
      >
        {congress?.edition}ª Edição
      </h1>
      <h2
        style={{
          color: '#fff',
          fontSize: '4rem',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 4rem',
        }}
      >
        {congress?.title}
      </h2>
    </div>,
  )
}
