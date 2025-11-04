'use client'

import { DataTable } from '@components/ui/data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { useSDHCTeam } from '../../_hooks/use-sdhc-team.hook'
import { LoadingSkeleton } from './loading-skeleton'
import { sdhcTeamTableColumns } from './sdhc-team-table-columns'

export interface ISDHCTeamMemberUser {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: 'ADMIN' | 'USER'
}

export interface ISDHCTeamMember {
  id: string
  role: string
  description: string | null
  createdAt: string
  updatedAt: string
  userId: string
  user: ISDHCTeamMemberUser
}

export function Table() {
  const { data, isLoading, handleRemoveMember } = useSDHCTeam()

  const [{ name, email, role, description, createdAt, updatedAt }] =
    useQueryStates({
      name: parseAsBoolean.withDefault(true),
      email: parseAsBoolean.withDefault(true),
      role: parseAsBoolean.withDefault(true),
      description: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    })

  if (isLoading) {
    return <LoadingSkeleton />
  }

  const filteredSDHCTeamTableColumns: ColumnDef<ISDHCTeamMember>[] =
    sdhcTeamTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'name') {
        return email
      }

      if (column.id === 'role') {
        return role
      }

      if (column.id === 'description') {
        return description
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
          columns={filteredSDHCTeamTableColumns}
          data={data?.members}
          handleRemove={handleRemoveMember}
        />
      )}

      {isLoading && <LoadingSkeleton />}
    </>
  )
}
