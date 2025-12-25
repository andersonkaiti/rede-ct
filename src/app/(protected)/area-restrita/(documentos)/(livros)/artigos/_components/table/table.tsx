'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { scientificArticleTableColumns } from './article-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useScientificArticles,
} from './use-scientific-articles.hook'

interface IScientificArticle {
  id: string
  title: string
  author: string
  journal: string | null
  volume: string | null
  edition: string | null
  pageStart: number | null
  pageEnd: number | null
  startDate: Date
  endDate: Date
  city: string | null
  state: string | null
  country: string | null
  publisher: string | null
  description: string | null
  year: number | null
  accessUrl: string | null
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveArticle, isLoading } = useScientificArticles()

  const [{ title, author, journal, year, publisher, createdAt, updatedAt }] =
    useQueryStates({
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
        currentPage={data?.page ?? DEFAULT_PAGE}
        defaultRowsPerPage={data?.limit ?? DEFAULT_LIMIT}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
