/** biome-ignore-all lint/performance/noImgElement: needed */

import { getBookVolumeById } from '@http/book-volumes/get-book-volume-by-id'
import { ImageResponse } from 'next/og'

export const alt = 'Book Volume'

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

  const volume = await getBookVolumeById(id)

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
      {volume?.coverImageUrl ? (
        <img
          alt={volume?.title}
          src={volume?.coverImageUrl ?? undefined}
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
          {volume?.title}
        </h1>
      )}
    </div>,
  )
}
