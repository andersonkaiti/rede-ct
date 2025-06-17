import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CongressCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function CongressCard({
  title,
  description,
  imageUrl,
  link,
}: CongressCardProps) {
  return (
    <Card className="flex flex-col items-stretch gap-2 rounded-lg p-0 shadow-lg md:flex-row">
      <picture className="relative h-64 w-full overflow-hidden rounded-t-lg md:h-auto md:w-2/4 md:rounded-l-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="absolute object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </picture>
      <div className="w-full space-y-4 p-6 md:w-3/4">
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground text-justify">{description}</p>
        </CardContent>
        <CardFooter className="p-0">
          <Link href={link} className="w-full">
            <Button className="group w-full font-bold">
              Link do congresso
              <ArrowRight className="!size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
