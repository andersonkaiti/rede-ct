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
import { IEvent } from "@services/events/events";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EventCard({
  event: {
    title,
    description,
    href,
    image,
    status,
    subscriptionPeriod,
    subtitle,
  },
}: {
  event: IEvent;
}) {
  return (
    <Card className="rounded-lg border border-gray-200 p-0 shadow-sm">
      <div className="flex flex-col items-stretch md:flex-row">
        <picture className="relative h-64 w-full overflow-hidden rounded-t-lg md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </picture>

        <div className="w-full space-y-4 p-6 md:w-3/4">
          <CardHeader className="space-y-4 p-0">
            <time className="flex items-stretch gap-2 text-sm">
              <Badge className="bg-primary/20 text-primary rounded-md p-1 font-bold">
                <Calendar className="text-primary !size-5 h-fit" />
              </Badge>
              <div className="flex flex-col leading-4">
                <span className="font-bold text-black">
                  Período de inscrição: {subscriptionPeriod.start} até{" "}
                  {subscriptionPeriod.end}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="text-muted-foreground !size-3" />
                  <span className="text-muted-foreground">
                    {subscriptionPeriod.time}
                  </span>
                </div>
              </div>
            </time>

            <CardTitle className="text-xl font-bold">
              {title} ({subtitle})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="text-muted-foreground text-justify">
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-0">
            <Link href={href} className="w-full">
              <Button className="group w-full font-bold">
                {status === "inscricoes-abertas"
                  ? "Inscreva-se"
                  : "Inscrições encerradas"}
                <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
