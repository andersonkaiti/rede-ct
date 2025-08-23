import { DataTable } from '@components/ui/data-table'
import type { ITeamMember } from 'types/team'

import { teamMembersTableColumns } from './team-members-table-columns'

interface ITeamMembersTableProps {
  teamMembers: ITeamMember[]
  handleRemoveMember: (data: ITeamMember) => void
}

export function TeamMembersTable({
  teamMembers,
  handleRemoveMember,
}: ITeamMembersTableProps) {
  return (
    <DataTable<ITeamMember, unknown>
      columns={teamMembersTableColumns}
      data={teamMembers}
      handleRemove={handleRemoveMember}
    />
  )
}
