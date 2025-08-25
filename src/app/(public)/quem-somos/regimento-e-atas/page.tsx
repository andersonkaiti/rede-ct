import { Button } from '@components/ui/button'
import Link from 'next/link'

export default function RegimentosEAtas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          REGIMENTO, CONVOCAÇÕES, PAUTAS E ATAS
        </h1>
        <p className="text-justify text-muted-foreground">
          Nesta seção do website, a RedeCT mantém três campos distintos: (1) o
          seu Regimento Interno (atualizado e válido); (2) as convocatórias e
          pautas das reuniões e assembleias previstas; (3) as Atas das reuniões
          gerais e setoriais (por exemplo das vice-coordenadorias ou dos GTs).
        </p>
      </section>

      <section className="space-y-4 p-6">
        <h2 className="title-2 text-center">REGIMENTO INTERNO DA REDECT</h2>
        <p className="text-justify text-muted-foreground">
          Esta é a 1ª versão (já válida) do Regimento Interno da RedeCT,
          publicada em 19/04/2024 (Dia dos Povos Indígenas do Brasil). Durante
          30 dias, a coordenação da RedeCT receberá sugestões de ajustes pelo
          e-mail redect.pesquisa@gmail.com. Após esta data será publicada a
          versão com as pequenas correções sugeridas. Mas, desde 19/04/2024,
          este Regimento já é válido e deve ser seguido pelos Pesquisadores
          Filiados da RedeCT.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link
              href="/quem-somos/regimento-e-atas"
              rel="noopener noreferrer"
              target="_blank"
            >
              Baixar Regimento Interno
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4 p-6">
        <h2 className="title-2 text-center">
          CONVOCAÇÕES E PAUTAS DE REUNIÕES
        </h2>
        <div className="space-y-4">
          <div className="rounded-md bg-background p-4">
            <h3 className="font-semibold text-primary">Próxima Reunião</h3>
            <p className="mt-2 text-primary">
              25/07/2024, 15h (on-line) - 1ª Assembleia Geral Extraordinária de
              Pesquisadores Filiados
            </p>
            <p className="mt-2 text-primary">
              <strong>PAUTA:</strong>
            </p>
            <ul className="mt-2 list-inside list-disc text-primary">
              <li>
                Prorrogação do período de submissões de trabalhos no V CCI e
                seus desdobramentos
              </li>
              <li>Ratificação da aprovação do Regimento Interno da RedeCT</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-muted-foreground">
              Reuniões Anteriores
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium">15/03/2024</span> - Reunião de
                Coordenação
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium">01/02/2024</span> - Assembleia
                Geral Ordinária
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 p-6">
        <h2 className="title-2 text-center">ATAS DE REUNIÕES</h2>
        <div className="space-y-4">
          <div className="rounded-md bg-muted-foretext-muted-foreground p-4">
            <h3 className="font-semibold text-muted-foreground">
              Atas Recentes
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-muted-foreground">
                <Link
                  className="hover:text-primary"
                  href="/quem-somos/regimento-e-atas"
                >
                  Ata da Assembleia Geral - 01/02/2024
                </Link>
              </li>
              <li className="text-muted-foreground">
                <Link
                  className="hover:text-primary"
                  href="/quem-somos/regimento-e-atas"
                >
                  Ata da Reunião de Coordenação - 15/03/2024
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-muted-foreground">
              Arquivo de Atas
            </h3>
            <p className="text-muted-foreground">
              Para acessar atas anteriores, entre em contato com a secretaria da
              RedeCT através do e-mail redect.pesquisa@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 p-6">
        <h2 className="title-2 mb-6 text-center">CALENDÁRIO DE REUNIÕES</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-muted-foretext-muted-foreground p-4">
            <h3 className="font-semibold text-muted-foreground">
              Reuniões Mensais
            </h3>
            <p className="mt-2 text-muted-foreground">
              Primeira segunda-feira de cada mês, às 15h
            </p>
          </div>
          <div className="rounded-md bg-muted-foretext-muted-foreground p-4">
            <h3 className="font-semibold text-muted-foreground">
              Assembleias Gerais
            </h3>
            <p className="mt-2 text-muted-foreground">
              Trimestrais, sempre no último sábado do trimestre
            </p>
          </div>
          <div className="rounded-md bg-muted-foretext-muted-foreground p-4">
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
