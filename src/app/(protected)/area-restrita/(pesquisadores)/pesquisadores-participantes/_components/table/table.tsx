'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useResearchers } from '../../_hooks/use-researchers.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { researchersTableColumns } from './researchers-table-columns'

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
  const { data, handleRemoveResearcher, isLoading, page, limit } =
    useResearchers()

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
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
