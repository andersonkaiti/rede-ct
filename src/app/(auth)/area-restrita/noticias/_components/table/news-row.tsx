import { Button } from "@components/ui/button";
import { Link } from "@components/ui/pagination";
import * as Table from "@components/ui/table";
import { formatDate } from "@utils/format-date";
import { Pencil } from "lucide-react";
import { INews } from "types/news";
import { DeleteDialog } from "../delete-dialog";

export interface INewsRowProps {
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
    <Table.Row>
      <Table.Cell>
        {title.length > 30 ? title.slice(0, 30) + "..." : title}
      </Table.Cell>
      <Table.Cell>{formatDate(created_at)}</Table.Cell>
      <Table.Cell className="space-x-7">
        <Link href={`/area-restrita/noticias/editar/${id}`}>
          <Button variant="ghost" className="cursor-pointer text-xs">
            Editar
            <Pencil />
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
      </Table.Cell>
    </Table.Row>
  );
}
