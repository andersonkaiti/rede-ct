import { Copy } from "@components/copy";
import { NavigationCard } from "@components/navigation-card";
import { OrderedList } from "@components/ordered-list";
import { Banknote, FileText, Link as LinkIcon, PiggyBank } from "lucide-react";

export default function TransparenciaEControleSocial() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      {/* INTRODUÇÃO */}
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          Transparência e Controle Social 🔍
        </h1>
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
        <div className="space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
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
        </div>

        {/* RESPONSABILIDADES DO COMITÊ LEGITIMADOR */}
        <div className="space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <h2 className="title-3">
            O Comitê Legitimador tem como responsabilidades:
          </h2>
          <OrderedList.Root>
            <OrderedList.Item>
              Referendar ou vetar a Carta Anual da RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Vetar publicações científicas oriundas dos fluxos editorias da
              RedeCT a partir da observância de problemas éticos;
            </OrderedList.Item>
            <OrderedList.Item>
              Levar à Coordenação Geral da RedeCT eventuais problemas ou
              questões de diversas natureza, solicitando providências;
            </OrderedList.Item>
            <OrderedList.Item>
              Emitir recomendação de admissão ou veto ao ingresso de Membros
              Honorários na RedeCT;
            </OrderedList.Item>
            <OrderedList.Item>
              Analisar e emitir parecer acerca de encaminhamentos feitos à esta
              instância pela Coordenação Geral da RedeCT.
            </OrderedList.Item>
          </OrderedList.Root>
        </div>
      </section>

      {/* COMITÊ LEGITIMADOR */}
      <section className="space-y-8">
        <h2 className="title-2">TRANSPARÊNCIA DE CONTAS</h2>
        <p className="text-justify">
          Sob responsabilidade da Vice-coordenadoria Administrativa da RedeCT,
          nesta seção você encontrará o saldo atual da RedeCT, o saldo em conta
          corrente e o arquivo do extrato com o detalhamento dos lançamentos
          (entradas de valores e pagamento de despesas). ESTA ÁREA ESTÁ EM
          CONSTRUÇÃO!
        </p>
        <h3 className="text-2xl font-bold">
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
          <NavigationCard.Root href="/quem-somos/transparencia-e-controle-social/comite-legitimador">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-indigo-500/20 p-2">
                  <FileText className="text-indigo-500" />
                </div>
                <h2 className="title-3 font-bold">Comitê Legitimador</h2>
              </div>
              <p>
                Conheça os membros do Comitê Legitimador da RedeCT e suas
                contribuições para o desenvolvimento de pesquisas sobre povos
                tradicionais.
              </p>
            </div>
          </NavigationCard.Root>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-md p-6 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-500/20 p-2">
                <FileText className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold">
                Extrato detalhado de lançamentos financeiros
              </h3>
            </div>
            <div className="flex cursor-pointer items-center gap-2 font-bold text-indigo-500 hover:underline">
              <LinkIcon className="h-5 w-5" />
              <p>LINK DE ACESSO AO ARQUIVO</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-md p-6 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-500/20 p-2">
                <Banknote className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Saldo em conta corrente</h3>
            </div>
            <div>
              <p className="text-justify">
                Saldo atual: R$21.788,57 (03/04/2025 - 7h53min)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-md p-6 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-indigo-500/20 p-2">
                <PiggyBank className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold">Saldo total da RedeCT</h3>
            </div>
            <div>
              <p className="text-justify">
                Saldo total: R$26.054,00 (conta corrente: R$21.788,57 + eventos:
                R$4.131,00 + Even3: R$135,00). Atualizado em 03/04/2025
                (7h53min).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="title-3">Dados da conta corrente</h2>
          <div className="grid grid-cols-1 gap-8 rounded-md p-7 text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 lg:grid-cols-3 lg:p-14">
            <div className="space-y-2">
              <h3 className="text-gray-500">Banco</h3>
              <h3 className="title-3">Banco Santander</h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-500">Agência</h3>
              <h3 className="title-3">004</h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-500">Titular</h3>
              <h3 className="title-3">Alexandre de Castro Campos</h3>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:col-span-3 lg:flex-row">
              <div className="space-y-2">
                <h3 className="title-3">Conta corrente</h3>
                <Copy className="text-gray-500">02-028318-0</Copy>
              </div>
              <div className="space-y-2">
                <h3 className="title-3">Chave pix</h3>
                <Copy className="text-gray-500">
                  da231105-2947-4343-9214-064b15e45313
                </Copy>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* OBSERVAÇÕES */}
      <section className="space-y-8">
        <h2 className="title-2">Observações</h2>
        <OrderedList.Root>
          <OrderedList.Item className="text-justify">
            O arquivo do extrato detalhado será atualizado mensalmente.
          </OrderedList.Item>
          <OrderedList.Item className="text-justify">
            Em breve, a RedeCT contará com conta corrente de pessoa jurídica
            vinculada ao CNPJ do Instituto de Pesquisas Amazônicas e de Povos
            Tradicionais, mas para resolver esta questão de imediato foi criada
            uma conta corrente conjunta entre 2 Pesquisadores Filiados à RedeCT.
          </OrderedList.Item>
        </OrderedList.Root>
      </section>
    </main>
  );
}
