'use client'

import { DataTable } from '@components/ui/data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useManagementTeam } from './use-management-team.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { managementTeamTableColumns } from './management-team-table-columns'

interface ITeam {
  id: string
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  members: {
    id: string
    role: string
    description: string | null
    createdAt: string
    updatedAt: string
    teamId: string
    userId: string
    user: {
      id: string
      name: string
      role: string
      createdAt: string
      updatedAt: string
      avatarUrl: string | null
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
    }
  }[]
}

export default function Table() {
  const { data, isLoading, handleRemoveTeam } = useManagementTeam()

  const [{ name, quantity }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    quantity: parseAsBoolean.withDefault(true),
  })

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const filteredManagementTeamTableColumns: ColumnDef<ITeam>[] =
    managementTeamTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'membersQuantity') {
        return quantity
      }

      return true
    })

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredManagementTeamTableColumns}
          data={data?.teams}
          handleRemove={handleRemoveTeam}
        />
      )}

      {isLoading && <LoadingSkeleton />}
    </>
  )
}
