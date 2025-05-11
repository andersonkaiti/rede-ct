import { OrderedList } from "@components/ordered-list";
import { MembroCard } from "@components/membro-card";
import { Link } from "lucide-react";
import { getComiteLegitimador } from "@actions/comite-legitimador";

export default async function TransparenciaEControleSocial() {
  const comiteLegitimador = await getComiteLegitimador();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <section className="space-y-14">
        <h1 className="text-center text-5xl font-extrabold">
          CONTROLE SOCIAL E TRANSPARÊNCIA
        </h1>
        <p className="text-justify text-gray-500">
          Esta seção é subdividida em 2 áreas que são estruturantes para o
          processo da legalidade, transparência e legitimação. Primeiro temos o
          COMITÊ LEGITIMADOR (sob responsabilidade da Vice-coordenadoria de
          Extensão Universitária e Cultura) e na sequência a área de
          TRANSPARÊNCIA DE CONTAS (sob responsabilidade da Vice-coordenadoria
          Administrativa da RedeCT).
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-4xl font-bold">
          CONTROLE SOCIAL - Comitê Legitimador da RedeCT
        </h2>
        <h3 className="text-2xl font-bold">
          O que é o Comitê de Legitimação (ou Comitê Legitimador) da RedeCT?
        </h3>
        <p className="text-justify text-gray-500">
          O Comitê Legitimador da RedeCT é uma instância interna de caráter
          consultivo, deliberativo e fiscal (com poderes limitados às cláusulas
          estabelecidas no Regimento Interno da RedeCT). Mantém reuniões
          ordinárias e extraordinárias, quando necessário.
        </p>
        <p className="text-justify text-gray-500">
          De acordo com o Regimento Interno da RedeCT, a finalidade máxima do
          Comitê de Legitimação da RedeCT é: &quote;garantir que os trabalhos da
          RedeCT, bem como as publicações oriundas destes se alinhem aos valores
          centrais da Rede, de modo muito especial nas relações estabelecidas
          por esta e por seus pesquisadores filiados aos Povos
          Tradicionais&quote;.
        </p>
        <p className="text-justify text-gray-500">
          O Comitê Legitimador é constituído por representantes de diferentes
          povos e comunidades tradicionais (indígenas, geraizeiros, quilombolas,
          caiçaras, povos de terreiro, etc) e de áreas acadêmicas centrais aos
          trabalhos da RedeCT (Antropologia e Museologia).
        </p>
        <p className="text-justify text-gray-500">
          A gestão do Comitê Legitimador é de responsabilidade da
          Vice-coordenadoria de Extensão Universitária e Cultura da RedeCT.
        </p>
        <p className="text-justify text-gray-500">
          O Comitê Legitimador tem como responsabilidades:
        </p>
        <OrderedList.Root>
          <OrderedList.Item>
            Referendar ou vetar a Carta Anual da RedeCT;
          </OrderedList.Item>
          <OrderedList.Item>
            Vetar publicações científicas oriundas dos fluxos editorias da
            RedeCT a partir da observância de problemas éticos;
          </OrderedList.Item>
          <OrderedList.Item>
            Levar à Coordenação Geral da RedeCT eventuais problemas ou questões
            de diversas natureza, solicitando providências;
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
        <h2 className="text-4xl font-bold">
          Como é composto o Comitê Legitimador?
        </h2>
        <p className="text-justify text-gray-500">
          Sob responsabilidade da Vice-coordenadoria de Extensão Universitária e
          Cultura, o Comitê Legitimador é composto pelo Vice-coordenador de
          Extensão e Cultura (que tem a responsabilidade de organizar as pautas
          e reuniões, tendo direito à palavra e ao voto de minerva) e mais 7
          membros representantes das áreas de Antropologia e Museologia e de
          cinco povos tradicionais diferentes, todos com direito à palavra e ao
          voto (sob presidência do vice-coordenador que tem voto de minerva em
          caso de empate). O Secretário Geral tem direito à palavra, mas não tem
          direito ao voto.
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-4xl font-bold">
          Composição do Comitê Legitimador da RedeCT
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {comiteLegitimador.map((member, index: number) => (
            <MembroCard.Root key={index}>
              <MembroCard.Image src={member.image.src} alt={member.image.alt} />
              <div className="flex flex-grow flex-col items-center justify-between gap-4">
                <h1 className="text-center text-xl font-bold">{member.name}</h1>
                <h2 className="text-center font-bold">{member.role}</h2>
              </div>
            </MembroCard.Root>
          ))}
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-4xl font-bold">TRANSPARÊNCIA DE CONTAS</h2>
        <p className="text-justify text-gray-500">
          Sob responsabilidade da Vice-coordenadoria Administrativa da RedeCT,
          nesta seção você encontrará o saldo atual da RedeCT, o saldo em conta
          corrente e o arquivo do extrato com o detalhamento dos lançamentos
          (entradas de valores e pagamento de despesas). ESTA ÁREA ESTÁ EM
          CONSTRUÇÃO!
        </p>
        <h3 className="text-2xl font-bold">
          O que é o Comitê de Legitimação (ou Comitê Legitimador) da RedeCT?
        </h3>
        <p className="text-justify text-gray-500">
          A RedeCT, gradativamente, vem se apresentando sobre uma estrutura de
          legalidade, legitimidade e transparência. Entram neste processo todas
          as contas, valores e fluxos financeiros a partir de 10/11/2023, quando
          da definição de uma nova estrutura da RedeCT.
        </p>
        <p className="text-justify text-gray-500">
          Assim, aqui ao lado, você encontra 3 áreas, sendo uma com link para
          o EXTRATO DETALHADO DE LANÇAMENTOS* (entradas de valores e pagamento
          de despesas), uma outra área com o SALDO EM CONTA CORRENTE**, já uma
          terceira área traz o SALDO TOTAL da RedeCT (somatória do saldo da
          conta corrente com valores ainda bloqueados referente a alguma
          atividade da RedeCT ou mesmo de prestação de contas ainda em curso).
        </p>
        <OrderedList.Root>
          <OrderedList.Item className="text-justify text-gray-500">
            <span className="font-bold text-black">Observação 1:</span> o
            arquivo do extrato detalhado será atualizado mensalmente.
          </OrderedList.Item>
          <OrderedList.Item className="text-justify text-gray-500">
            <span className="font-bold text-black">Observação 2:</span> em
            breve, a RedeCT contará com conta corrente de pessoa jurídica
            vinculada ao CNPJ do Instituto de Pesquisas Amazônicas e de Povos
            Tradicionais, mas para resolver esta questão de imediato foi criada
            uma conta corrente conjunta entre 2 Pesquisadores Filiados à RedeCT.
          </OrderedList.Item>
        </OrderedList.Root>
        <h3 className="text-2xl font-bold">
          Extrato detalhado de lançamentos financeiros
        </h3>
        <div className="flex cursor-pointer items-center gap-2 font-bold text-indigo-500 hover:underline">
          <Link className="h-5 w-5" />
          <p>LINK DE ACESSO AO ARQUIVO</p>
        </div>
        <h3 className="text-2xl font-bold">Saldo em conta corrente</h3>
        <p className="text-justify text-gray-500">
          O saldo atual, em conta corrente exclusiva da RedeCT é
          de R$21.788,57 (vinte e um mil e setecentos e oitenta e oito reais e
          cincoenta e sete centavos) em 03/04/2025 (7h53min).
        </p>
        <p className="text-justify text-gray-500">Dados da conta corrente:</p>
        <h3 className="text-2xl font-bold">Saldo total da RedeCT</h3>
        <p className="text-justify text-gray-500">
          O saldo total da RedeCT (somando-se o saldo da conta corrente de uso
          exclusivo da RedeCT (R$21.788,57), os valores disponíveis na conta
          eventos (R$4.131,00), o saldo disponível no Even3 - Colóquio
          Internacional de 2025 (R$ 135,00) é de R$ 26.054,00 (vinte e seis mil
          e ciquenta e quatro reais). Atualizado em 03/04/2025 (7h53min).
        </p>
      </section>
    </main>
  );
}
