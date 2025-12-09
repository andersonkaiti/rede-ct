import { Badge } from '@components/ui/badge'
import { ListNumber } from '@components/ui/list-number'
import { UserCardRedLine } from '@components/ui/user-card'
import { BookOpen, Users } from 'lucide-react'
import dynamicImport from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicReferenceCenterTeam = dynamicImport(() =>
  import('./_components/reference-center-team').then(
    (m) => m.ReferenceCenterTeam,
  ),
)

export default function CentroDeReferencia() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <BookOpen className="size-7" />
          </Badge>
          <h1 className="title-2">
            Centro de Referência sobre Povos e Comunidades Tradicionais (PCTs)
          </h1>
        </div>
        <p className="text-justify text-lg text-muted-foreground">
          Esse projeto vinculado a Universidade Estadual "Júlio de Mesquita
          Filho" (UNESP/FAAC/Bauru) tem o objetivo de mapear docentes e
          discentes que são de comunidades tradicionais e/ou desenvolvem
          temáticas de ensino, pesquisa e extensão relacionadas aos PCTs.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="title-2">Apresentação</h2>

        <p className="text-justify text-muted-foreground leading-relaxed">
          Considerando a natureza multicampi da Unesp, observou-se que as
          informações e os contatos entre professores, servidores e estudantes
          autodeclarados ou articulados por meio de projetos (ensino, pesquisa,
          extensão) se apresentavam difusas e desconectadas e, ainda, que a
          referida universidade busca meios para uma mais adequada política de
          atendimento dos PCTs, propôs-se a criação do Centro de Referência PCT
          na Unesp (a partir do câmpus de Bauru) em parceria com a RedeCT.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="title-2">Finalidades</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ListNumber>1</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Criar um espaço virtual de acessos e arquivos importantes para
              quem atua ou se interessa pela pauta PCT na UNESP;
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>2</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Mapear e potencializar trabalhos de ensino, pesquisa e extensão
              universitária sobre a pauta PCT na UNESP;
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>3</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Articular projetos especiais, redes temáticas e demais tipos de
              cooperação para ou sobre a pauta PCT;
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>4</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Melhorar o processo de sensibilização interna, de combate às
              diversas formas de violência, de desinformação acerca da pauta
              PCT;
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>5</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Contribuir para a divulgação externa e acolhimento interno de
              integrantes de Povos e Comunidades Tradicionais junto aos cursos e
              todos os tipos de atividades da UNESP.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <Users className="size-6" />
            </Badge>
            <h2 className="title-2">
              Equipe do Centro de Referência PCT da Unesp
            </h2>
          </div>
          <UserCardRedLine />
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicReferenceCenterTeam />
        </Suspense>
      </section>

      <section className="space-y-8">
        <h2 className="title-2">Dados Gerenciais</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ListNumber>1</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">Coordenação:</span> Prof. Assoc.
              Nelson Russo de Moraes (DARP/FAAC/UNESP Bauru)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>2</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">Bolsista:</span> Alicya Silva de
              Oliveira (Estudante de Relações Públicas/FAAC/UNESP Bauru)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>3</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">
                Data do início dos trabalhos:
              </span>{' '}
              01/12/2024
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>4</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">
                Local físico de atendimento:
              </span>{' '}
              Sala 69 - Sala de Projetos de Direitos Humanos da FAAC
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>5</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">Atendimento presencial:</span>{' '}
              Quartas e quintas-feiras das 8h às 12h (na sala 69)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>6</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              <span className="font-semibold">E-mail:</span> nononono
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="title-2">Parcerias</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ListNumber>1</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              RedeCT (Rede Internacional de Pesquisadores sobre Povos
              Originários e Comunidades Tradicionais)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>2</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              PROEC (Pró-reitoria de Extensão e Cultura da UNESP)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>3</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Museu Histórico e Pedagógico Índia Vanuíre - Tupã/SP
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>4</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              Centro de Inovação Tecnológica de Bauru (CITeB)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ListNumber>5</ListNumber>
            <p className="text-justify text-muted-foreground leading-relaxed">
              PROADE (Pró-Reitoria de Ações Afirmativas, Diversidade e Equidade)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
