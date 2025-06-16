import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import { formatDate } from "@utils/format-date";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { INews } from "types/news";

export function Noticia({
  news: {
    title,
    content,
    updated_at,
    image_url,
    author: { image_url: author_image_url, first_name, last_name },
    id,
  },
}: {
  news: INews;
}) {
  return (
    <Card className="flex w-full flex-col items-start justify-between gap-0 rounded-md p-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <picture className="relative h-60 w-full overflow-hidden rounded-t-md">
        <Image
          src={image_url ?? ""}
          alt={`Foto de ${first_name} ${last_name}`}
          fill
          className="object-cover transition-all duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <CardContent className="flex grow flex-col justify-between gap-4 p-6">
        <CardHeader className="flex items-center gap-x-2 p-0">
          <Calendar className="text-muted-foreground size-4 leading-3" />
          <time dateTime={updated_at} className="text-muted-foreground">
            {formatDate(updated_at)}
          </time>
        </CardHeader>
        <CardDescription className="group relative space-y-2 p-0">
          <h3 className="group-hover:text-primary text-lg/6 font-semibold text-gray-900">
            <Link href={`/noticias/${id}`}>
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <div className="group-hover:text-primary line-clamp-3 text-justify text-sm leading-relaxed text-gray-600">
            {content.substring(0, 100)}...
          </div>
        </CardDescription>
        <Separator />
        <CardFooter className="relative flex w-full items-center justify-between gap-x-2 p-0 text-xs">
          <div className="flex items-center gap-x-2">
            <div className="relative size-6">
              <Image
                src={author_image_url}
                alt={`Foto de ${first_name} ${last_name}`}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="font-semibold text-gray-900">
              {first_name} {last_name}
            </div>
          </div>
          <Link href={`/noticias/${id}`} className="group size-4">
            <ArrowRight className="group-hover:text-primary size-4 transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
