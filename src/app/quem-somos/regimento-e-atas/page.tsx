import { Button } from "@components/ui/button";
import Link from "next/link";

export default function RegimentosEAtas() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          REGIMENTO, CONVOCAÇÕES, PAUTAS E ATAS
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção do website, a RedeCT mantém três campos distintos: (1) o
          seu Regimento Interno (atualizado e válido); (2) as convocatórias e
          pautas das reuniões e assembleias previstas; (3) as Atas das reuniões
          gerais e setoriais (por exemplo das vice-coordenadorias ou dos GTs).
        </p>
      </section>

      <section className="space-y-4 p-6">
        <h2 className="title-2 text-center">REGIMENTO INTERNO DA REDECT</h2>
        <p className="text-justify text-gray-500">
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
              target="_blank"
              rel="noopener noreferrer"
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
          <div className="rounded-md bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-800">Próxima Reunião</h3>
            <p className="mt-2 text-blue-700">
              25/07/2024, 15h (on-line) - 1ª Assembleia Geral Extraordinária de
              Pesquisadores Filiados
            </p>
            <p className="mt-2 text-blue-600">
              <strong>PAUTA:</strong>
            </p>
            <ul className="mt-2 list-inside list-disc text-blue-600">
              <li>
                Prorrogação do período de submissões de trabalhos no V CCI e
                seus desdobramentos
              </li>
              <li>Ratificação da aprovação do Regimento Interno da RedeCT</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Reuniões Anteriores</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">15/03/2024</span> - Reunião de
                Coordenação
              </li>
              <li className="text-gray-600">
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
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-800">Atas Recentes</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600">
                <Link
                  href="/quem-somos/regimento-e-atas"
                  className="hover:text-blue-600"
                >
                  Ata da Assembleia Geral - 01/02/2024
                </Link>
              </li>
              <li className="text-gray-600">
                <Link
                  href="/quem-somos/regimento-e-atas"
                  className="hover:text-blue-600"
                >
                  Ata da Reunião de Coordenação - 15/03/2024
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Arquivo de Atas</h3>
            <p className="text-gray-500">
              Para acessar atas anteriores, entre em contato com a secretaria da
              RedeCT através do e-mail redect.pesquisa@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 p-6">
        <h2 className="title-2 mb-6 text-center">CALENDÁRIO DE REUNIÕES</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-800">Reuniões Mensais</h3>
            <p className="mt-2 text-gray-600">
              Primeira segunda-feira de cada mês, às 15h
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-800">Assembleias Gerais</h3>
            <p className="mt-2 text-gray-600">
              Trimestrais, sempre no último sábado do trimestre
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-800">Reuniões de GTs</h3>
            <p className="mt-2 text-gray-600">
              Quinzenais, conforme agendamento específico de cada GT
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
