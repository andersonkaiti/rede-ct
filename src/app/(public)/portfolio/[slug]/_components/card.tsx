import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import { Calendar, ExternalLink, User } from "lucide-react";
import Link from "next/link";

import type { IPortfolioData } from "../_constants/portfolio-data";

interface ICardProps {
  item: IPortfolioData["content"][number];
}

export function CardComponent({ item }: ICardProps) {
  return (
    <Card className="gap-4 overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <CardHeader>
        <time className="text-muted-foreground flex items-center gap-2">
          <Calendar className="size-4" />
          <span>{new Date(item.date).toLocaleDateString("pt-BR")}</span>
        </time>

        <CardTitle className="line-clamp-2 text-xl font-bold text-gray-900">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-muted-foreground line-clamp-3 text-justify text-sm">
          {item.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto flex flex-col items-start gap-2">
        <Separator />

        <div className="text-muted-foreground flex items-center gap-2">
          <User className="size-4" />
          <span className="text-xs">{item.author}</span>
        </div>

        <Link
          href={item.link}
          className="inline-flex w-full items-center font-medium text-gray-900 transition-colors hover:text-gray-700"
        >
          <Button className="group w-full">
            Saiba mais{" "}
            <ExternalLink className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
