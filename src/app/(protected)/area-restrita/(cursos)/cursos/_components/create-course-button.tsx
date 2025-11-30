import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateCourseButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/cursos/cadastrar">Cadastrar Curso</Link>
    </Button>
  )
}
