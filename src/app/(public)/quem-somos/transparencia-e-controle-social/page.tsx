import { Copy } from '@components/copy'
import { Badge } from '@components/ui/badge'
import { Card } from '@components/ui/card'
import { NavigationCard } from '@components/ui/navigation-card'
import {
  Banknote,
  FileText,
  Link as LinkIcon,
  PiggyBank,
  Search,
} from 'lucide-react'
import Link from 'next/link'

export default function TransparenciaEControleSocial() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1 text-primary">
            <Search className="!size-7" />
          </Badge>
          <h1 className="title-2">Transparência e Controle Social</h1>
        </div>
        <p className="text-justify">
          Esta seção é subdividida em 2 áreas que são estruturantes para o
          processo da legalidade, transparência e legitimação. Primeiro temos o
          COMITÊ LEGITIMADOR (sob responsabilidade da Vice-coordenadoria de
          Extensão Universitária e Cultura) e na sequência a área de
          TRANSPARÊNCIA DE CONTAS (sob responsabilidade da Vice-coordenadoria
          Administrativa da RedeCT).
        </p>
      </section>
      <section className="space-y-8">
        <Card className="space-y-4 rounded-md p-8 text-justify">
          <h2 className="title-2">
            CONTROLE SOCIAL - Comitê Legitimador da RedeCT
          </h2>
          <h3 className="title-3">
            O que é o Comitê de Legitimação (ou Comitê Legitimador) da RedeCT?
          </h3>
          <p className="text-justify">
            O Comitê Legitimador da RedeCT é uma instância interna de caráter
            consultivo, deliberativo e fiscal (com poderes limitados às
            cláusulas estabelecidas no Regimento Interno da RedeCT). Mantém
            reuniões ordinárias e extraordinárias, quando necessário.
          </p>
          <p className="text-justify">
            De acordo com o Regimento Interno da RedeCT, a finalidade máxima do
            Comitê de Legitimação da RedeCT é: &quote;garantir que os trabalhos
            da RedeCT, bem como as publicações oriundas destes se alinhem aos
            valores centrais da Rede, de modo muito especial nas relações
            estabelecidas por esta e por seus pesquisadores filiados aos Povos
            Tradicionais&quote;.
          </p>
          <p className="text-justify">
            O Comitê Legitimador é constituído por representantes de diferentes
            povos e comunidades tradicionais (indígenas, geraizeiros,
            quilombolas, caiçaras, povos de terreiro, etc) e de áreas acadêmicas
            centrais aos trabalhos da RedeCT (Antropologia e Museologia).
          </p>
          <p className="text-justify">
            A gestão do Comitê Legitimador é de responsabilidade da
            Vice-coordenadoria de Extensão Universitária e Cultura da RedeCT.
          </p>
        </Card>

        <Card className="space-y-4 rounded-md bg-background p-8 text-justify">
          <h2 className="title-3">
            O Comitê Legitimador tem como responsabilidades:
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                1
              </span>
              Referendar ou vetar a Carta Anual da RedeCT;
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                2
              </span>
              Vetar publicações científicas oriundas dos fluxos editorias da
              RedeCT a partir da observância de problemas éticos;
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                3
              </span>
              Levar à Coordenação Geral da RedeCT eventuais problemas ou
              questões de diversas natureza, solicitando providências;
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                4
              </span>
              Emitir recomendação de admissão ou veto ao ingresso de Membros
              Honorários na RedeCT;
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                5
              </span>
              Analisar e emitir parecer acerca de encaminhamentos feitos à esta
              instância pela Coordenação Geral da RedeCT.
            </li>
          </ol>
        </Card>
      </section>

      <section className="space-y-8">
        <h2 className="title-2">TRANSPARÊNCIA DE CONTAS</h2>
        <p className="text-justify">
          Sob responsabilidade da Vice-coordenadoria Administrativa da RedeCT,
          nesta seção você encontrará o saldo atual da RedeCT, o saldo em conta
          corrente e o arquivo do extrato com o detalhamento dos lançamentos
          (entradas de valores e pagamento de despesas). ESTA ÁREA ESTÁ EM
          CONSTRUÇÃO!
        </p>
        <h3 className="font-bold text-2xl">
          O que é o Comitê de Legitimação (ou Comitê Legitimador) da RedeCT?
        </h3>
        <p className="text-justify">
          A RedeCT, gradativamente, vem se apresentando sobre uma estrutura de
          legalidade, legitimidade e transparência. Entram neste processo todas
          as contas, valores e fluxos financeiros a partir de 10/11/2023, quando
          da definição de uma nova estrutura da RedeCT.
        </p>
        <p className="text-justify">
          Assim, aqui ao lado, você encontra 3 áreas, sendo uma com link para
          o EXTRATO DETALHADO DE LANÇAMENTOS* (entradas de valores e pagamento
          de despesas), uma outra área com o SALDO EM CONTA CORRENTE**, já uma
          terceira área traz o SALDO TOTAL da RedeCT (somatória do saldo da
          conta corrente com valores ainda bloqueados referente a alguma
          atividade da RedeCT ou mesmo de prestação de contas ainda em curso).
        </p>

        <section>
          <NavigationCard href="/quem-somos/transparencia-e-controle-social/comite-legitimador">
            <div className="rounded-full bg-primary/20 p-2">
              <FileText className="text-primary" />
            </div>
            <h2 className="title-3 font-bold">Comitê Legitimador</h2>
          </NavigationCard>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-7 text-justify shadow-lg transition-shadow hover:shadow-xl dark:bg-background">
            <div className="flex w-full items-center gap-4">
              <div className="rounded-full bg-green-500/20 p-3">
                <FileText className="text-green-600" />
              </div>
              <h3 className="font-bold text-base md:text-lg">
                Extrato detalhado
              </h3>
            </div>
            <Link
              aria-label="Acessar arquivo de extrato detalhado"
              className="flex items-center gap-2 font-semibold text-primary transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkIcon className="h-5 w-5" />
              <span>Ver arquivo detalhado</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-7 text-justify shadow-lg transition-shadow hover:shadow-xl dark:bg-background">
            <div className="flex w-full items-center gap-4">
              <div className="rounded-full bg-primary/20 p-3">
                <Banknote className="text-primary" />
              </div>
              <h3 className="font-bold text-base md:text-lg">Saldo em conta</h3>
            </div>
            <div className="w-full">
              <p className="text-justify font-medium text-base text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-primary">Saldo atual:</span>{' '}
                R$21.788,57
                <span className="ml-2 text-gray-500 text-xs dark:text-gray-400">
                  (03/04/2025 - 7h53min)
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-7 text-justify shadow-lg transition-shadow hover:shadow-xl dark:bg-background">
            <div className="flex w-full items-center gap-4">
              <div className="rounded-full bg-primary/20 p-3">
                <PiggyBank className="text-primary" />
              </div>
              <h3 className="font-bold text-base md:text-lg">Saldo total</h3>
            </div>
            <div className="w-full">
              <p className="text-justify font-medium text-base text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-primary">Saldo total:</span>{' '}
                R$26.054,00
                <br />
                <span className="text-gray-500 text-xs dark:text-gray-400">
                  (conta corrente: R$21.788,57 + eventos: R$4.131,00 + Even3:
                  R$135,00)
                  <br />
                  Atualizado em 03/04/2025 (7h53min)
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="title-3">Dados da conta corrente</h2>
          <div className="grid grid-cols-1 gap-8 rounded-md p-7 text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 lg:grid-cols-3 lg:p-14">
            <div className="space-y-2">
              <h3 className="text-background-foreground">Banco</h3>
              <h3 className="title-3">Banco Santander</h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-background-foreground">Agência</h3>
              <h3 className="title-3">004</h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-background-foreground">Titular</h3>
              <h3 className="title-3">Alexandre de Castro Campos</h3>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:col-span-3 lg:flex-row">
              <div className="space-y-2">
                <h3 className="title-3">Conta corrente</h3>
                <Copy className="text-background-foreground">02-028318-0</Copy>
              </div>
              <div className="space-y-2">
                <h3 className="title-3">Chave pix</h3>
                <Copy className="text-background-foreground">
                  da231105-2947-4343-9214-064b15e45313
                </Copy>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="space-y-8">
        <h2 className="title-2">Observações</h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
              1
            </span>
            O arquivo do extrato detalhado será atualizado mensalmente.
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
              2
            </span>
            Em breve, a RedeCT contará com conta corrente de pessoa jurídica
            vinculada ao CNPJ do Instituto de Pesquisas Amazônicas e de Povos
            Tradicionais, mas para resolver esta questão de imediato foi criada
            uma conta corrente conjunta entre 2 Pesquisadores Filiados à RedeCT.
          </li>
        </ol>
      </section>
    </main>
  )
}
