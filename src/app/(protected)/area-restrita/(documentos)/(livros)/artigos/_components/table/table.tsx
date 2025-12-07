'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useScientificArticles } from './use-scientific-articles.hook'
import { scientificArticleTableColumns } from './article-table-columns'
import { LoadingSkeleton } from './loading-skeleton'

interface IScientificArticle {
  id: string
  title: string
  author: string
  journal: string | null
  volume: string | null
  edition: string | null
  pageStart: number | null
  pageEnd: number | null
  startDate: string
  endDate: string
  city: string | null
  state: string | null
  country: string | null
  publisher: string | null
  description: string | null
  year: number | null
  accessUrl: string | null
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveArticle, isLoading, page, limit } =
    useScientificArticles()

  const [
    {
      title,
      author,
      journal,
      year,
      publisher,
      createdAt,
      updatedAt,
    },
  ] = useQueryStates({
    title: parseAsBoolean.withDefault(true),
    author: parseAsBoolean.withDefault(true),
    journal: parseAsBoolean.withDefault(true),
    year: parseAsBoolean.withDefault(true),
    publisher: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IScientificArticle>[] =
    scientificArticleTableColumns.filter((column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'author') {
        return author
      }

      if (column.id === 'journal') {
        return journal
      }

      if (column.id === 'year') {
        return year
      }

      if (column.id === 'publisher') {
        return publisher
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.scientificArticles}
          handleRemove={handleRemoveArticle}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
