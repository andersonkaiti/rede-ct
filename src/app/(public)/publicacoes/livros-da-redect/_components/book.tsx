import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { IBook } from "@services/redect-books/redect-books";
import Link from "next/link";

interface IBookProps {
  book: IBook;
}

export function Book({
  book: { volume, year, preface, prefaceText, publisher, link },
}: IBookProps) {
  return (
    <Card className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold text-black">
          Volume {volume} ({year})
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-auto space-y-4 p-0">
        <p className="text-muted-foreground font-semibold">{preface}</p>
        <p className="text-muted-foreground leading-relaxed">{prefaceText}</p>
        <p className="text-primary italic">{publisher}</p>
      </CardContent>
      <CardFooter className="p-0">
        <Link href={link} target="_blank" className="w-full">
          <Button className="w-full font-bold">Acessar volume completo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
