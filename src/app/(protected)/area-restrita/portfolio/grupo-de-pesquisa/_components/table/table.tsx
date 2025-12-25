'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { researchGroupTableColumns } from './research-group-table-columns'
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  useResearchGroups,
} from './use-research-groups.hook'

interface IResearchGroup {
  id: string
  name: string
  acronym: string | null
  description: string | null
  url: string | null
  logoUrl: string | null
  foundedAt: Date
  scope: string | null
  email: string | null
  leaderId: string
  deputyLeaderId: string
  createdAt: Date
  updatedAt: Date
  leader: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
    role: 'USER' | 'ADMIN'
  }
  deputyLeader: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
    role: 'USER' | 'ADMIN'
  }
}

export function Table() {
  const { data, handleRemoveResearchGroup, isLoading } = useResearchGroups()

  const [{ name, acronym, leader, foundedAt, createdAt, updatedAt }] =
    useQueryStates({
      name: parseAsBoolean.withDefault(true),
      acronym: parseAsBoolean.withDefault(true),
      leader: parseAsBoolean.withDefault(true),
      foundedAt: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    })

  const filteredTableColumns: ColumnDef<IResearchGroup>[] =
    researchGroupTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'acronym') {
        return acronym
      }

      if (column.id === 'leader') {
        return leader
      }

      if (column.id === 'foundedAt') {
        return foundedAt
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
          data={data?.researchGroups}
          handleRemove={handleRemoveResearchGroup}
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
