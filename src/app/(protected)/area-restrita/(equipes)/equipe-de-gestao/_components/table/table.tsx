'use client'

import { DataTable } from '@components/ui/data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryState } from 'nuqs'
import type { ITeam } from 'types/team'
import { useManagementTeam } from '../../_hooks/use-management-team.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { managementTeamTableColumns } from './management-team-table-columns'

const TEAM_TYPE = 'equipe-de-gestao'

export default function Table() {
  const {
    data: teams,
    isLoading,
    handleRemoveTeam,
  } = useManagementTeam(TEAM_TYPE)

  const [hasName] = useQueryState('nome', parseAsBoolean.withDefault(true))
  const [hasQuantity] = useQueryState(
    'quantidade',
    parseAsBoolean.withDefault(true)
  )

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const noneOfThem = !(hasName || hasQuantity)

  const filteredManagementTeamTableColumns: ColumnDef<ITeam>[] = noneOfThem
    ? []
    : managementTeamTableColumns.filter((column) => {
        if (column.id === 'name' && !hasName) {
          return false
        }

        if (column.id === 'membersQuantity' && !hasQuantity) {
          return false
        }

        return true
      })

  return (
    <DataTable<ITeam, unknown>
      columns={filteredManagementTeamTableColumns}
      data={teams}
      handleRemove={handleRemoveTeam}
    />
  )
}
