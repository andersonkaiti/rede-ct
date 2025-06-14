import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WebinarCardProps {
  title: string;
  description: string;
  imageUrl: string;
  speakerImageUrl: string;
  link: string;
  date: string;
  time: string;
  speakers: string[];
}

export function WebinarCard({
  title,
  imageUrl,
  speakerImageUrl,
  link,
  date,
  time,
  speakers,
}: WebinarCardProps) {
  return (
    <Card className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white p-0 md:flex-row">
      <picture className="relative flex h-67 items-stretch bg-gray-100 p-0 md:h-auto md:w-2/4">
        <Image
          src={imageUrl}
          alt={speakers[0].split(" - ")[0]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <CardContent className="space-y-4 p-6 md:w-3/4">
        <CardHeader className="space-y-4 p-0">
          <time className="flex items-stretch gap-2 text-sm">
            <Badge className="bg-primary/20 text-primary rounded-md p-1 font-bold">
              <Calendar className="text-primary !size-5" />
            </Badge>
            <div className="flex flex-col leading-4">
              <span className="font-bold text-black">{date}</span>
              <div className="flex items-center gap-1">
                <Clock className="text-muted-foreground !size-3" />
                <span className="text-muted-foreground">{time}</span>
              </div>
            </div>
          </time>

          <CardTitle className="text-2xl font-bold text-gray-800">
            {title}
          </CardTitle>
        </CardHeader>

        <CardDescription className="space-y-1">
          <h4 className="w-fit text-sm font-semibold">Convidada</h4>
          <div className="flex items-center">
            <picture className="relative mr-3 size-6 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src={speakerImageUrl}
                alt={speakers[0].split("(")[0].trim()}
                fill
                className="object-cover"
                sizes="48px"
              />
            </picture>
            <div className="text-muted-foreground">{speakers[0]}</div>
          </div>
        </CardDescription>

        <CardFooter className="p-0">
          <Link href={link} className="w-full">
            <Button className="w-full font-bold">Acessar Curso</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
