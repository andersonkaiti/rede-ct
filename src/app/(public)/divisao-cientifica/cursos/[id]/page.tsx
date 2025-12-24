import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getCourseById } from '@http/courses/get-course-by-id'
import { formatDate } from '@utils/format-date'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { CourseButton } from './_components/course-button'

interface ICourseDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ICourseDetailsProps) {
  const { id } = await params

  const course = await getCourseById(id)

  return {
    title: course.title,
  }
}

export default async function CourseDetails({ params }: ICourseDetailsProps) {
  const { id } = await params

  const course = await getCourseById(id)

  const formattedDate = format(
    course.scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const formattedTime = format(
    course.scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/cursos" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{course.title}</h1>

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <time className="text-muted-foreground text-sm">
            Última atualização em {formatDate(new Date(course.updatedAt))}
          </time>

          <ShareButton title={course.title} text={course.title} />
        </div>
      </PageHeader>

      <PageMain className="gap-10">
        {course.imageUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={course.title}
              className="rounded-md object-cover"
              fill
              src={course.imageUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <section className="space-y-2">
              <h2 className="flex items-center text-muted-foreground">
                Coordenador
              </h2>

              <UserProfileHoverCard user={course.coordinator} />
            </section>

            {course.instructors && course.instructors.length > 0 && (
              <section className="space-y-2">
                <h2 className="flex items-center text-muted-foreground">
                  Instrutores
                </h2>

                <div className="flex flex-wrap gap-4">
                  {course.instructors.map((instructor) => (
                    <UserProfileHoverCard
                      key={instructor.id}
                      user={instructor}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <Separator />
        </div>

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Data</h2>
              <p>
                {formattedDate} às {formattedTime}
              </p>
            </div>

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Local</h2>
              <p>{course.location}</p>
            </div>

            {course.email && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">E-mail</h2>
                <p>{course.email}</p>
              </div>
            )}
          </div>

          {course.description && (
            <p className="whitespace-pre-wrap text-justify">
              {course.description}
            </p>
          )}

          <CourseButton registrationLink={course.registrationLink} />
        </section>
      </PageMain>
    </PageContainer>
  )
}
