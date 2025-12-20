/** biome-ignore-all lint/performance/noImgElement: needed */

import { getPostGraduateProgramById } from '@http/post-graduate-programs/get-post-graduate-program-by-id'
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

  const program = await getPostGraduateProgramById(id)

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
      {program?.imageUrl ? (
        <img
          alt={program?.title}
          src={program?.imageUrl ?? undefined}
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
          {program?.title}
        </h1>
      )}
    </div>,
  )
}
