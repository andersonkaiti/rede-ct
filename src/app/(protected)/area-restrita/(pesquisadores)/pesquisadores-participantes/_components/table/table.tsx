'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { researchersTableColumns } from './researchers-table-columns'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useResearchers,
} from './use-researchers.hook'

interface IResearcher {
  id: string
  createdAt: string
  updatedAt: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
  occupations: string
  seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
  institutions: string
  biography: string | null
  user: {
    id: string
    name: string
    emailAddress: string
    orcid: string | null
    lattesUrl: string | null
    avatarUrl: string | null
    phone: string | null
    createdAt: string
    updatedAt: string
    role: 'ADMIN' | 'USER'
  }
}

export function Table() {
  const { data, handleRemoveResearcher, isLoading } = useResearchers()

  const [{ registrationNumber, name, seniority }] = useQueryStates({
    registrationNumber: parseAsBoolean.withDefault(true),
    name: parseAsBoolean.withDefault(true),
    seniority: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IResearcher>[] =
    researchersTableColumns.filter((column) => {
      if (column.id === 'registrationNumber') {
        return registrationNumber
      }

      if (column.id === 'name') {
        return name
      }

      if (column.id === 'seniority') {
        return seniority
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.researchers}
          handleRemove={handleRemoveResearcher}
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
