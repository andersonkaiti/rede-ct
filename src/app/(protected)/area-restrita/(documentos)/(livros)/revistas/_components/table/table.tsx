'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { scientificJournalTableColumns } from './journal-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useScientificJournals } from './use-scientific-journals.hook'

interface IScientificJournal {
  id: string
  name: string
  issn: string
  description: string
  journalUrl: string
  logoUrl: string | null
  directors: string | null
  editorialBoard: string | null
  createdAt: string
  updatedAt: string
}

export function Table() {
  const { data, handleRemoveJournal, isLoading, page, limit } =
    useScientificJournals()

  const [
    {
      name,
      issn,
      description,
      directors,
      editorialBoard,
      createdAt,
      updatedAt,
    },
  ] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    issn: parseAsBoolean.withDefault(true),
    description: parseAsBoolean.withDefault(true),
    directors: parseAsBoolean.withDefault(true),
    editorialBoard: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IScientificJournal>[] =
    scientificJournalTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'issn') {
        return issn
      }

      if (column.id === 'description') {
        return description
      }

      if (column.id === 'directors') {
        return directors
      }

      if (column.id === 'editorialBoard') {
        return editorialBoard
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
          data={data?.scientificJournals}
          handleRemove={handleRemoveJournal}
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
