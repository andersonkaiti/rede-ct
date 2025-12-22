import { BackArrow } from '@components/ui/back-arrow'
import { getPostGraduateProgramById } from '@http/post-graduate-programs/get-post-graduate-program-by-id'
import { formatDate } from '@utils/format-date'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { ProgramButton } from './_components/program-button'

interface IProgramDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IProgramDetailsProps) {
  const { id } = await params

  const program = await getPostGraduateProgramById(id)

  return {
    title: program.title,
  }
}

export default async function ProgramDetails({ params }: IProgramDetailsProps) {
  const { id } = await params

  const program = await getPostGraduateProgramById(id)

  const formattedStartDate = format(
    program.startDate,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const formattedEndDate = format(
    program.endDate,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/pos-graduacao" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{program.title}</h1>

        <time className="text-muted-foreground text-sm">
          Última atualização em {formatDate(program.updatedAt)}
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        {program.imageUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={program.title}
              className="rounded-md object-cover"
              fill
              src={program.imageUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Início das Inscrições</h2>
              <p>{formattedStartDate}</p>
            </div>

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Fim das Inscrições</h2>
              <p>{formattedEndDate}</p>
            </div>

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Contato</h2>
              <p>{program.contact}</p>
            </div>
          </div>

          {program.description && (
            <p className="whitespace-pre-wrap text-justify">
              {program.description}
            </p>
          )}

          <ProgramButton registrationLink={program.registrationLink} />
        </section>
      </PageMain>
    </PageContainer>
  )
}
