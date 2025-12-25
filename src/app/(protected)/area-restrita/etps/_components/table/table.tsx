'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { etpsTableColumns } from './etps-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useEtps } from './use-etps.hook'

export interface ETPMemberUser {
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

export interface ETPResearcher {
  id: string
  registrationNumber: string
  mainEtps: string
  formations: string
  degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
  occupations: string
  seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
  institutions: string
  biography: string
  createdAt: string
  updatedAt: string
  userId: string
  user: ETPMemberUser
}

export interface ETPRoleMember {
  id: string
  etpId: string
  researcherId: string
  researcher: ETPResearcher
}

export type EtpMember = ETPResearcher

export interface IETP {
  id: string
  code: string
  title: string
  description: string | null
  notes: string | null
  createdAt: string
  updatedAt: string
  leader: ETPRoleMember
  deputyLeader: ETPRoleMember
  secretary: ETPRoleMember
  members: EtpMember[]
}

export function Table() {
  const { data, handleRemoveEtp, isLoading } = useEtps()

  const [{ code, title, createdAt, updatedAt }] = useQueryStates({
    code: parseAsBoolean.withDefault(true),
    title: parseAsBoolean.withDefault(true),
    createdAt: parseAsBoolean.withDefault(true),
    updatedAt: parseAsBoolean.withDefault(true),
  })

  const filteredTableColumns: ColumnDef<IETP>[] = etpsTableColumns.filter(
    (column) => {
      if (column.id === 'code') {
        return code
      }

      if (column.id === 'title') {
        return title
      }

      if (column.id === 'createdAt') {
        return createdAt
      }

      if (column.id === 'updatedAt') {
        return updatedAt
      }

      return true
    },
  )

  return (
    <>
      {!isLoading && (
        <DataTable
          columns={filteredTableColumns}
          data={data?.etps}
          handleRemove={handleRemoveEtp}
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
