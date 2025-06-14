import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { ICourse } from "@services/courses/courses";
import { Calendar, Dot, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CourseCard({
  title,
  imageUrl,
  link,
  date,
  time,
  location,
  vacancies,
  category,
}: ICourse) {
  return (
    <Card className="flex w-full flex-col items-stretch gap-2 overflow-hidden rounded-lg bg-white p-0 shadow-lg md:flex-row">
      <picture className="relative h-64 w-full overflow-hidden rounded-t-lg md:h-auto md:w-2/4 md:rounded-l-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <div className="w-full space-y-4 p-6 md:w-3/4">
        <Badge className="bg-primary/20 text-primary rounded-full p-1 px-2 font-bold">
          {category}
        </Badge>

        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-0">
          <time className="text-primary flex items-center gap-2">
            <Calendar className="size-4" />
            <div className="text-muted-foreground flex items-center">
              {date} <Dot className="text-primary" /> {time}
            </div>
          </time>

          <div className="flex items-center gap-2">
            <MapPin className="text-primary size-4" />
            <span className="text-muted-foreground">{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-primary size-4" />
            <span className="text-muted-foreground">{vacancies}</span>
          </div>
        </CardContent>

        <CardFooter className="p-0">
          <Link href={link} className="w-full">
            <Button className="w-full font-bold">Inscreva-se</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
