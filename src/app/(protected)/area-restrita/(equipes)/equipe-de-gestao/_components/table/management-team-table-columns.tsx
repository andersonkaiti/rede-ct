import { ColumnDef } from "@tanstack/react-table";
import { ITeam } from "types/team";

import { ActionsRow } from "./actions-row";

export const managementTeamTableColumns: ColumnDef<ITeam>[] = [
  {
    id: "name",
    header: "Nome",
    cell: ({
      row: {
        original: { name },
      },
    }) => name,
  },
  {
    id: "membersQuantity",
    header: "Quantidade de membros",
    cell: ({
      row: {
        original: { team_members },
      },
    }) => team_members.length,
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({
      row: { original },
      table: {
        options: { meta },
      },
    }) => (
      <ActionsRow
        data={original}
        handleRemove={() => meta?.handleRemove?.(original)}
      />
    ),
  },
];
