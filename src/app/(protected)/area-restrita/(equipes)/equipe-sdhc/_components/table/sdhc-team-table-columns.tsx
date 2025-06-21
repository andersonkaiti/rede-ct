import { ColumnDef } from "@tanstack/react-table";
import { ITeamMember } from "types/team";
import { IUser } from "types/user";

import { ActionsRow } from "./actions-row";

export const sdhcTeamTableColumns: ColumnDef<ITeamMember>[] = [
  {
    id: "name",
    header: "Nome",
    cell: ({
      row: {
        original: { user },
      },
    }) => {
      const { first_name, last_name } = user as IUser;

      return `${first_name} ${last_name || ""}`;
    },
  },
  {
    id: "role",
    header: "Cargo",
    cell: ({
      row: {
        original: { role },
      },
    }) => role,
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
