'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { galleryTableColumns } from './gallery-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useCongressGallery } from './use-congress-gallery.hook'

interface IGalleryImage {
  id: string
  imageUrl: string
  caption?: string | null
  congressId: string
}

export function Table() {
  const { data, handleRemoveGalleryImage, isLoading, page, limit } =
    useCongressGallery()

  const [{ caption, imageUrl }] = useQueryStates({
    caption: parseAsBoolean.withDefault(true),
    imageUrl: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IGalleryImage>[] =
    galleryTableColumns.filter((column) => {
      if (column.id === 'caption') {
        return caption
      }

      if (column.id === 'imageUrl') {
        return imageUrl
      }

      return column.id === 'actions'
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.data || []}
          handleRemove={handleRemoveGalleryImage}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.pagination?.totalPages ?? 1}
      />
    </>
  )
}
