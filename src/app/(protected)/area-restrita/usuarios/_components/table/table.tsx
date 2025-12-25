'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useUsers } from './use-users.hook'
import { usersTableColumns } from './users-table-columns'

interface IUser {
  avatarUrl: string | null
  createdAt: string
  emailAddress: string
  id: string
  lattesUrl: string | null
  name: string
  orcid: string | null
  phone: string | null
  role: 'ADMIN' | 'USER'
  updatedAt: string
}

export function Table() {
  const { data, handlePromoteUser, handleDemoteUser, isLoading } = useUsers()

  const [{ name, emailAddress, role, createdAt }] = useQueryStates({
    name: parseAsBoolean.withDefault(true),
    emailAddress: parseAsBoolean.withDefault(true),
    role: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IUser>[] = usersTableColumns.filter(
    (column) => {
      if (column.id === 'name') {
        return name
      }

      if (column.id === 'emailAddress') {
        return emailAddress
      }

      if (column.id === 'role') {
        return role
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      return true
    },
  )

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.users}
          handlePromote={handlePromoteUser}
          handleDemote={handleDemoteUser}
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
