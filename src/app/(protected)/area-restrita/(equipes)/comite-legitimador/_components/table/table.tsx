'use client'

import { DataTable } from '@components/ui/data-table'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { legitimatorCommitteeTableColumns } from './legitimator-committee-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useLegitimatorCommittee } from './use-legitimator-committee.hook'

interface IUser {
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

interface ILegitimatorCommitteeTeamMember {
  id: string
  role: string
  description: string | null
  createdAt: string
  updatedAt: string
  userId: string
  user: IUser
}

export function Table() {
  const { data, isLoading, handleRemoveMember } = useLegitimatorCommittee()

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

  const filteredLegitimatorCommitteeTableColumns: ColumnDef<ILegitimatorCommitteeTeamMember>[] =
    legitimatorCommitteeTableColumns.filter((column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'email') {
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
          columns={filteredLegitimatorCommitteeTableColumns}
          data={data?.members}
          handleRemove={handleRemoveMember}
        />
      )}

      {isLoading && <LoadingSkeleton />}
    </>
  )
}
