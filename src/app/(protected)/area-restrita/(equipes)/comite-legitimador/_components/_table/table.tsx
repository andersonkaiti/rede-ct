'use client'

import { DataTable } from '@components/ui/data-table'
import { parseAsBoolean, parseAsString, useQueryState } from 'nuqs'
import { useLegitimatorCommittee } from '../../_hooks/use-team.hook'
import {
  type ILegitimatorCommitteeTeamMember,
  legitimatorCommitteeTableColumns,
} from './legitimator-committee-table-columns'
import { LoadingSkeleton } from './loading-skeleton'

export function Table() {
  const {
    data: team,
    isLoading,
    handleRemoveMember,
  } = useLegitimatorCommittee()

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

  const filteredLegitimatorCommitteeTableColumns = noneOfThem
    ? []
    : legitimatorCommitteeTableColumns.filter((column) => {
        if (column.id === 'name' && !hasName) {
          return false
        }

        if (column.id === 'email' && !hasEmail) {
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
    <DataTable<ILegitimatorCommitteeTeamMember, unknown>
      columns={filteredLegitimatorCommitteeTableColumns}
      data={filteredTeamMembers}
      handleRemove={handleRemoveMember}
    />
  )
}
