'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { museumTableColumns } from './museum-table-columns'
import { useMuseums } from './use-museums.hook'

interface IMuseum {
  id: string
  logoUrl: string | null
  name: string
  city: string | null
  state: string | null
  country: string | null
  description: string | null
  website: string | null
  email: string | null
  phone: string | null
  address: string | null
  functioning: string | null
  createdAt: Date
  updatedAt: Date
}

export function Table() {
  const { data, handleRemoveMuseum, isLoading, page, limit } = useMuseums()

  const [{ name, city, state, country, createdAt, updatedAt }] = useQueryStates(
    {
      name: parseAsBoolean.withDefault(true),
      city: parseAsBoolean.withDefault(true),
      state: parseAsBoolean.withDefault(true),
      country: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    },
  )

  const filteredTableColumns: ColumnDef<IMuseum>[] = museumTableColumns.filter(
    (column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'city') {
        return city
      }

      if (column.id === 'state') {
        return state
      }

      if (column.id === 'country') {
        return country
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    },
  )

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.museums}
          handleRemove={handleRemoveMuseum}
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
