/** biome-ignore-all lint/performance/noImgElement: needed */

import { getCourseById } from '@http/courses/get-course-by-id'
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

  const course = await getCourseById(id)

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
      {course?.imageUrl ? (
        <img
          alt={course?.title}
          src={course?.imageUrl ?? undefined}
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
          {course?.title}
        </h1>
      )}
    </div>,
  )
}
