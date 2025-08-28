import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
} from 'lucide-react'
import Link from 'next/link'

const REGIMENTO_URL = '/docs/Regimento-Interno-RedeCT-2024.pdf'
const ATAS = [
  {
    title: 'Ata da Assembleia Geral - 01/02/2024',
    url: '/docs/ata-assembleia-2024-02-01.pdf',
  },
  {
    title: 'Ata da Reunião de Coordenação - 15/03/2024',
    url: '/docs/ata-coordenacao-2024-03-15.pdf',
  },
]
const REUNIOES_ANTERIORES = [
  {
    data: '15/03/2024',
    descricao: 'Reunião de Coordenação',
  },
  {
    data: '01/02/2024',
    descricao: 'Assembleia Geral Ordinária',
  },
]

export default function RegimentosEAtas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 px-4 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <GraduationCap className="!size-7" />
          </Badge>
          <h1 className="title-2">Regimento, convocações, pautas e atas</h1>
        </div>
        <p className="text-justify text-muted-foreground">
          Nesta seção do website, a RedeCT mantém três campos distintos:{' '}
          <b>1)</b> o seu <b>Regimento Interno</b> (atualizado e válido);{' '}
          <b>2)</b> as <b>convocatórias e pautas</b> das reuniões e assembleias
          previstas; <b>3)</b> as <b>Atas</b> das reuniões gerais e setoriais
          (por exemplo das vice-coordenadorias ou dos GTs).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="title-3 flex items-center justify-center gap-2 text-center">
          <FileText className="inline-block text-primary" />
          REGIMENTO INTERNO DA REDECT
        </h2>
        <p className="text-justify text-muted-foreground">
          Esta é a 1ª versão (já válida) do Regimento Interno da RedeCT,
          publicada em <b>19/04/2024</b> (Dia dos Povos Indígenas do Brasil).
          Durante 30 dias, a coordenação da RedeCT receberá sugestões de ajustes
          pelo e-mail{' '}
          <a
            className="underline hover:text-primary"
            href="mailto:redect.pesquisa@gmail.com"
          >
            redect.pesquisa@gmail.com
          </a>
          . Após esta data será publicada a versão com as pequenas correções
          sugeridas. Mas, desde 19/04/2024, este Regimento já é válido e deve
          ser seguido pelos Pesquisadores Filiados da RedeCT.
        </p>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link
              download
              href={REGIMENTO_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FileText className="mr-2 h-4 w-4" />
              Baixar Regimento Interno (PDF)
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="title-3 flex items-center justify-center gap-2 text-center">
          <ClipboardList className="inline-block text-primary" />
          Convocações e Pautas de Reuniões
        </h2>
        <div className="space-y-6">
          <div className="rounded-md bg-background p-4 shadow-sm">
            <h3 className="mb-2 font-semibold text-lg text-primary">
              Próxima Reunião
            </h3>
            <div className="flex flex-col gap-1 text-primary">
              <span className="font-medium">25/07/2024, 15h (on-line)</span>
              <span>
                1ª Assembleia Geral Extraordinária de Pesquisadores Filiados
              </span>
            </div>
            <div className="mt-3">
              <span className="font-semibold">Pauta:</span>
              <ul className="mt-1 list-inside list-disc space-y-1 text-primary">
                <li>
                  Prorrogação do período de submissões de trabalhos no V CCI e
                  seus desdobramentos
                </li>
                <li>Ratificação da aprovação do Regimento Interno da RedeCT</li>
              </ul>
            </div>
          </div>
          <div className="mt-2 rounded-md bg-muted/40 p-4">
            <h3 className="mb-2 font-semibold text-muted-foreground">
              Reuniões Anteriores
            </h3>
            <ul className="space-y-1">
              {REUNIOES_ANTERIORES.map((r, i) => (
                <li className="text-muted-foreground" key={r.data + i}>
                  <span className="font-medium">{r.data}</span> — {r.descricao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="title-3 flex items-center justify-center gap-2 text-center">
          <FileText className="inline-block text-primary" />
          ATAS DE REUNIÕES
        </h2>
        <div className="space-y-4">
          <div className="rounded-md bg-muted/40 p-4">
            <h3 className="font-semibold text-muted-foreground">
              Atas Recentes
            </h3>
            <ul className="mt-2 space-y-2">
              {ATAS.map((ata, i) => (
                <li className="text-muted-foreground" key={ata.title + i}>
                  <Link
                    className="underline hover:text-primary"
                    href={ata.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {ata.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 rounded-md bg-muted/40 p-4">
            <h3 className="font-semibold text-muted-foreground">
              Arquivo de Atas
            </h3>
            <p className="text-muted-foreground">
              Para acessar atas anteriores, entre em contato com a secretaria da
              RedeCT através do e-mail{' '}
              <a
                className="underline hover:text-primary"
                href="mailto:redect.pesquisa@gmail.com"
              >
                redect.pesquisa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="title-3 mb-6 flex items-center justify-center gap-2 text-center">
          <CalendarDays className="inline-block text-primary" />
          CALENDÁRIO DE REUNIÕES
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-muted/40 p-4">
            <h3 className="font-semibold text-muted-foreground">
              Reuniões Mensais
            </h3>
            <p className="mt-2 text-muted-foreground">
              Primeira segunda-feira de cada mês, às 15h
            </p>
          </div>
          <div className="rounded-md bg-muted/40 p-4">
            <h3 className="font-semibold text-muted-foreground">
              Assembleias Gerais
            </h3>
            <p className="mt-2 text-muted-foreground">
              Trimestrais, sempre no último sábado do trimestre
            </p>
          </div>
          <div className="rounded-md bg-muted/40 p-4">
            <h3 className="font-semibold text-muted-foreground">
              Reuniões de GTs
            </h3>
            <p className="mt-2 text-muted-foreground">
              Quinzenais, conforme agendamento específico de cada GT
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
