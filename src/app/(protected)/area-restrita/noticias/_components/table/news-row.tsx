import { Button } from "@components/ui/button";
import { Link } from "@components/ui/pagination";
import { TableCell, TableRow } from "@components/ui/table";
import { formatDate } from "@utils/format-date";
import { EditIcon } from "lucide-react";
import { INews } from "types/news";

import { DeleteDialog } from "../delete-dialog";

interface INewsRowProps {
  news: INews;
  handleRemoveNews: ({
    id,
    author_id,
    image_url,
  }: Pick<INews, "id" | "author_id" | "image_url">) => Promise<void>;
}

export function NewsRow({
  news: { id, title, created_at, author_id, image_url },
  handleRemoveNews,
}: INewsRowProps) {
  return (
    <TableRow>
      <TableCell>
        {title.length > 30 ? title.slice(0, 30) + "..." : title}
      </TableCell>
      <TableCell>{formatDate(created_at)}</TableCell>
      <TableCell className="space-x-7">
        <Link href={`/area-restrita/noticias/editar/${id}`}>
          <Button variant="ghost" className="cursor-pointer text-xs">
            Editar
            <EditIcon className="size-4" />
          </Button>
        </Link>
        <DeleteDialog
          onDelete={() =>
            handleRemoveNews({
              id,
              author_id,
              image_url,
            })
          }
        />
      </TableCell>
    </TableRow>
  );
}
