'use client'

import { DataTable } from '@components/ui/data-table'
import { parseAsBoolean, parseAsString, useQueryState } from 'nuqs'
import type { ITeamMember } from 'types/team'
import { useTeam } from '../../../_hooks/use-team.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { sdhcTeamTableColumns } from './sdhc-team-table-columns'

const TEAM_TYPE = 'equipe-sdhc'

export function Table() {
  const {
    data: teams,
    isLoading,
    handleRemoveMember,
  } = useTeam({
    type: TEAM_TYPE,
  })

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const [hasName] = useQueryState('nome', parseAsBoolean.withDefault(true))
  const [hasRole] = useQueryState('cargo', parseAsBoolean.withDefault(true))
  const [hasDescription] = useQueryState(
    'descricao',
    parseAsBoolean.withDefault(true)
  )

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const noneOfThem = !(hasName || hasRole || hasDescription)

  const filteredSDHCTeamTableColumns = noneOfThem
    ? []
    : sdhcTeamTableColumns.filter((column) => {
        if (column.id === 'name' && !hasName) {
          return false
        }

        if (column.id === 'role' && !hasRole) {
          return false
        }

        if (column.id === 'description' && !hasDescription) {
          return false
        }

        return true
      })

  const onlyInclude = ['name', 'role', 'description']

  const filteredTeamMembers =
    teams?.[0]?.team_members.filter((teamMember) =>
      Object.entries(teamMember).some(([key, value]) => {
        if (!onlyInclude.includes(key)) {
          return false
        }

        if (typeof value === 'string') {
          return value.toLowerCase().includes(filter.toLowerCase())
        }

        if (typeof value === 'object' && value !== null) {
          return Object.values(value).some(
            (innerValue) =>
              typeof innerValue === 'string' &&
              innerValue.toLowerCase().includes(filter.toLowerCase())
          )
        }

        return false
      })
    ) || []

  return (
    <DataTable<ITeamMember, unknown>
      columns={filteredSDHCTeamTableColumns}
      data={filteredTeamMembers}
      handleRemove={handleRemoveMember}
    />
  )
}
