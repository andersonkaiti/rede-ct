import { DataTable } from '@components/ui/data-table'

import { teamMembersTableColumns } from './team-members-table-columns'

interface ITeamMember {
  id: string
  role: string
  userId: string
  user: {
    name: string
    id: string
    role: 'ADMIN' | 'USER'
    createdAt: string
    updatedAt: string
    avatarUrl: string | null
    emailAddress: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
  }
}

interface ITeamMembersTableProps {
  teamMembers: ITeamMember[]
  handleRemoveMember: (id: string) => void
}

export function TeamMembersTable({
  teamMembers,
  handleRemoveMember,
}: ITeamMembersTableProps) {
  return (
    <DataTable
      columns={teamMembersTableColumns}
      data={teamMembers}
      handleRemove={handleRemoveMember}
    />
  )
}
