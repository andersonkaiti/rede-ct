/** biome-ignore-all lint/performance/noImgElement: needed */

import { getResearchGroupById } from '@http/research-groups/get-research-group-by-id'
import { ImageResponse } from 'next/og'

export const alt = 'Grupo de Pesquisa'

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

  const researchGroup = await getResearchGroupById(id)

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
      {researchGroup?.logoUrl ? (
        <img
          alt={researchGroup?.name}
          src={researchGroup?.logoUrl ?? undefined}
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
          {researchGroup?.name}
        </h1>
      )}
    </div>,
  )
}
