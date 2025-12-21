/** biome-ignore-all lint/performance/noImgElement: needed */

import { getScientificJournalById } from '@http/scientific-journals/get-scientific-journal-by-id'
import { ImageResponse } from 'next/og'

export const alt = 'Scientific Journal'

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

  const journal = await getScientificJournalById(id)

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
      {journal?.logoUrl ? (
        <img
          alt={journal?.name}
          src={journal?.logoUrl ?? undefined}
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
          {journal?.name}
        </h1>
      )}
    </div>,
  )
}
