'use client'

import { DataTable } from '@components/ui/data-table'
import { parseAsBoolean, parseAsString, useQueryState } from 'nuqs'
import { useSDHCTeam } from '../../_hooks/use-team.hook'
import { LoadingSkeleton } from './loading-skeleton'
import {
  type ISDHCTeamMember,
  sdhcTeamTableColumns,
} from './sdhc-team-table-columns'

export function Table() {
  const { data: team, isLoading, handleRemoveMember } = useSDHCTeam()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const [hasName] = useQueryState('nome', parseAsBoolean.withDefault(true))
  const [hasEmail] = useQueryState('email', parseAsBoolean.withDefault(true))
  const [hasRole] = useQueryState('cargo', parseAsBoolean.withDefault(true))
  const [hasDescription] = useQueryState(
    'descricao',
    parseAsBoolean.withDefault(true)
  )
  const [hasCreatedAt] = useQueryState(
    'created_at',
    parseAsBoolean.withDefault(true)
  )
  const [hasUpdatedAt] = useQueryState(
    'updated_at',
    parseAsBoolean.withDefault(true)
  )

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const noneOfThem = !(hasName || hasRole || hasDescription)

  const filteredSDHCTeamTableColumns = noneOfThem
    ? []
    : sdhcTeamTableColumns.filter((column) => {
        if (column.id === 'name' && !hasEmail) {
          return false
        }

        if (column.id === 'name' && !hasName) {
          return false
        }

        if (column.id === 'role' && !hasRole) {
          return false
        }

        if (column.id === 'description' && !hasDescription) {
          return false
        }

        if (column.id === 'created_at' && !hasCreatedAt) {
          return false
        }

        if (column.id === 'updated_at' && !hasUpdatedAt) {
          return false
        }

        return true
      })

  const onlyInclude = ['name', 'role', 'description']

  const filteredTeamMembers =
    team?.members.filter((member) =>
      Object.entries(member).some(([key, value]) => {
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
    <DataTable<ISDHCTeamMember, unknown>
      columns={filteredSDHCTeamTableColumns}
      data={filteredTeamMembers}
      handleRemove={handleRemoveMember}
    />
  )
}
