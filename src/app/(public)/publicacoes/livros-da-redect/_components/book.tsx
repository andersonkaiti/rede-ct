import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import type { IBook } from '@mocks/redect-books/redect-books'
import Link from 'next/link'

interface IBookProps {
  book: IBook
}

export function Book({
  book: { volume, year, preface, prefaceText, publisher, link },
}: IBookProps) {
  return (
    <Card className="rounded-lg p-6 shadow-sm transition hover:shadow-md">
      <CardHeader className="p-0">
        <CardTitle className="font-bold text-foreground text-xl">
          Volume {volume} ({year})
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-auto space-y-4 p-0">
        <p className="font-semibold text-muted-foreground">{preface}</p>
        <p className="text-justify text-muted-foreground leading-relaxed">
          {prefaceText}
        </p>
        <p className="text-foreground italic">{publisher}</p>
      </CardContent>
      <CardFooter className="p-0">
        <Button asChild className="w-full font-bold" variant="outline">
          <Link href={link} target="_blank">
            Acessar volume completo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
