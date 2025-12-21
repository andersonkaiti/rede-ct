'use client'

import { DataTable } from '@components/ui/data-table'
import PaginatorComponent from '@components/ui/paginator'
import type { ColumnDef } from '@tanstack/react-table'
import { parseAsBoolean, useQueryStates } from 'nuqs'
import { courseTableColumns } from './course-table-columns'
import { LoadingSkeleton } from './loading-skeleton'
import { useCourses } from './use-courses.hook'

interface ICourse {
  id: string
  title: string
  imageUrl: string | null
  coordinator: {
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
  email: string
  scheduledAt: Date
  location: string
  registrationLink: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
  instructors?: {
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
  }[]
}

export function Table() {
  const { data, handleRemoveCourse, isLoading, page, limit } = useCourses()

  const [{ title, coordinator, location, scheduledAt, createdAt, updatedAt }] =
    useQueryStates({
      title: parseAsBoolean.withDefault(true),
      coordinator: parseAsBoolean.withDefault(true),
      location: parseAsBoolean.withDefault(true),
      scheduledAt: parseAsBoolean.withDefault(true),
      createdAt: parseAsBoolean.withDefault(true),
      updatedAt: parseAsBoolean.withDefault(true),
    })

  const filteredTableColumns: ColumnDef<ICourse>[] = courseTableColumns.filter(
    (column) => {
      if (column.id === 'title') {
        return title
      }

      if (column.id === 'coordinator') {
        return coordinator
      }

      if (column.id === 'location') {
        return location
      }

      if (column.id === 'scheduledAt') {
        return scheduledAt
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
          data={data?.courses}
          handleRemove={handleRemoveCourse}
        />
      )}

      {isLoading && <LoadingSkeleton />}

      <PaginatorComponent
        currentPage={Number(page)}
        defaultRowsPerPage={Number(limit)}
        totalPages={data?.totalPages ?? 1}
      />
    </>
  )
}
