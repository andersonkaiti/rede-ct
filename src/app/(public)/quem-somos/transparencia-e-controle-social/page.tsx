import { SearchIcon } from '@components/icons/search'
import { Card } from '@components/ui/card'
import { Copy } from '@components/ui/copy'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { CurrentBalanceCard } from './_components/accounting/current-balance/current-balance'
import { DetailedExtractCard } from './_components/accounting/detailed-extract/detailed-extract'
import { TotalBalanceCard } from './_components/accounting/total-balance/total-balance'
import { ResponsabilitiesCard } from './_components/cards/responsabilities'
import { CommitteeLegitimator } from './_components/navigation-cards/committee-legitimator'

export default function TransparencyAndSocialControl() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <SearchIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Transparência e Controle Social</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Esta seção é subdividida em 2 áreas que são estruturantes para o
        processo da legalidade, transparência e legitimação. Primeiro temos o
        COMITÊ LEGITIMADOR (sob responsabilidade da Vice-coordenadoria de
        Extensão Universitária e Cultura) e na sequência a área de TRANSPARÊNCIA
        DE CONTAS (sob responsabilidade da Vice-coordenadoria Administrativa da
        RedeCT).
      </PageDescription>
      <section className="space-y-8">
        <Card className="space-y-4 rounded-md p-8 text-justify">
          <h2 className="whitespace-normal font-bold text-2xl lg:text-4xl">
            CONTROLE SOCIAL - Comitê Legitimador da RedeCT
          </h2>
          <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
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

        <ResponsabilitiesCard />
      </section>

      <section className="space-y-8">
        <h2 className="whitespace-normal font-bold text-2xl lg:text-4xl">
          TRANSPARÊNCIA DE CONTAS
        </h2>
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

        <CommitteeLegitimator />

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <DetailedExtractCard />

          <CurrentBalanceCard />

          <TotalBalanceCard />
        </section>

        <section className="space-y-8">
          <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
            Dados da conta corrente
          </h2>
          <div className="grid grid-cols-1 gap-8 rounded-md p-7 text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 lg:grid-cols-3 lg:p-14">
            <div className="space-y-2">
              <h3 className="text-background-foreground">Banco</h3>
              <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
                Banco Santander
              </h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-background-foreground">Agência</h3>
              <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
                004
              </h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-background-foreground">Titular</h3>
              <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
                Alexandre de Castro Campos
              </h3>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:col-span-3 lg:flex-row">
              <div className="space-y-2">
                <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
                  Conta corrente
                </h3>
                <Copy className="text-background-foreground">02-028318-0</Copy>
              </div>
              <div className="space-y-2">
                <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
                  Chave pix
                </h3>
                <Copy className="text-background-foreground">
                  da231105-2947-4343-9214-064b15e45313
                </Copy>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="space-y-8">
        <h2 className="whitespace-normal font-bold text-2xl lg:text-4xl">
          Observações
        </h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="mt-1 mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
              1
            </span>
            O arquivo do extrato detalhado será atualizado mensalmente.
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
              2
            </span>
            Em breve, a RedeCT contará com conta corrente de pessoa jurídica
            vinculada ao CNPJ do Instituto de Pesquisas Amazônicas e de Povos
            Tradicionais, mas para resolver esta questão de imediato foi criada
            uma conta corrente conjunta entre 2 Pesquisadores Filiados à RedeCT.
          </li>
        </ol>
      </section>
    </PageContainer>
  )
}
