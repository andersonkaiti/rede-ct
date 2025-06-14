import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { ICourse } from "@services/courses/courses";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ICourseCardProps {
  course: ICourse;
}

export function CourseCard({
  course: {
    title,
    description,
    imageUrl,
    link,
    date,
    time,
    location,
    vacancies,
    category,
  },
}: ICourseCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg shadow-lg md:flex-row">
      <picture className="relative w-full overflow-hidden rounded-l-lg p-0 md:w-2/4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>

      <div className="w-full space-y-4 p-6 md:w-3/4">
        <Badge className="bg-primary/20 text-primary rounded-full p-1 px-2 font-bold">
          {category}
        </Badge>

        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-muted-foreground text-justify">{description}</p>

        <div className="space-y-4">
          <time className="text-primary flex items-center gap-2 p-2 text-sm">
            <Badge className="bg-primary/20 text-primary rounded-md p-1 font-bold">
              <Calendar className="text-primary !size-6.5" />
            </Badge>
            <div className="flex flex-col">
              <span className="font-bold text-black">{date}</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="text-muted-foreground !size-3" />
                {time}
              </span>
            </div>
          </time>

          <div className="flex items-center gap-2 p-2">
            <Badge className="bg-primary/20 text-primary rounded-md p-1 font-bold">
              <MapPin className="text-primary !size-6.5" />
            </Badge>
            <div className="flex flex-col text-sm">
              <span className="font-bold">Local</span>
              <span className="text-muted-foreground">{location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <Badge className="bg-primary/20 text-primary rounded-md p-1 font-bold">
              <Users className="text-primary !size-6.5" />
            </Badge>
            <div className="flex flex-col text-sm">
              <span className="font-bold">Vagas</span>
              <span className="text-muted-foreground">{vacancies}</span>
            </div>
          </div>
        </div>

        <Link href={link}>
          <Button className="w-full font-bold">INSCREVA-SE</Button>
        </Link>
      </div>
    </div>
  );
}
