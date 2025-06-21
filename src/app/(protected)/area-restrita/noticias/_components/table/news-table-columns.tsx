import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@utils/format-date";
import { INews } from "types/news";

import { ActionsRow } from "./actions-row";

export const newTableColumns: ColumnDef<INews>[] = [
  {
    id: "title",
    header: "Título",
    cell: ({
      row: {
        original: { title },
      },
    }) => (title.length > 30 ? title.slice(0, 30) + "..." : title),
  },
  {
    id: "date",
    header: "Data",
    cell: ({
      row: {
        original: { created_at },
      },
    }) => formatDate(created_at),
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
