import { Button } from "@components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";
import { IMagazine } from "@services/magazines/magazines";
import Image from "next/image";
import Link from "next/link";

export function MagazineCard({
  magazine: { description, image, name, url },
}: {
  magazine: IMagazine;
}) {
  return (
    <Card className="rounded-xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="space-y-4">
        <picture className="relative h-40 w-full rounded-md">
          <Image
            src={image}
            alt={name}
            fill
            className="overflow-hidden object-contain"
          />
        </picture>
        <h2 className="text-center text-xl font-semibold">{name}</h2>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={url} target="_blank" className="w-full">
          <Button className="w-full">Acessar publicação</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
