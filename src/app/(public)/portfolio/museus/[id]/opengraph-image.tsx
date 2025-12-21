/** biome-ignore-all lint/performance/noImgElement: needed */

import { getMuseumById } from '@http/museums/get-museum-by-id'
import { ImageResponse } from 'next/og'

export const alt = 'Museu'

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

  const museum = await getMuseumById(id)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#111',
      }}
    >
      {museum?.logoUrl ? (
        <img
          alt={museum?.name}
          src={museum?.logoUrl ?? undefined}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      ) : (
        <h1
          style={{
            color: '#fff',
            fontSize: '5rem',
            fontWeight: 'bold',
          }}
        >
          {museum?.name}
        </h1>
      )}
    </div>,
  )
}
