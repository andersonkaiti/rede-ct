import Link from "next/link";
import { OrderedList } from "@components/ordered-list";
import { GraduationCap, Heart, Users } from "lucide-react";
import { NavigationCard } from "@components/navigation-card";

export default async function PesquisadoresParticipantes() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      {/* Pesquisadores */}
      <h1 className="title-1 text-center">Pesquisadores da RedeCT</h1>
      <section className="space-y-8">
        <h2 className="title-2">
          CATEGORIAS DE PESQUISADORES FILIADOS, VALOR DE ANUIDADE E PESO DO VOTO
        </h2>
        <p className="text-justify">
          De acordo com o Art. 13 do Regimento Interno, os PESQUISADORES
          FILIADOS à RedeCT são classificados segundo sua titulação e conforme
          modo de ingresso, conforme cláusulas específicas constantes do
          Regimento Interno da Rede:
        </p>
        <div className="space-y-6 rounded-md bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-6 text-white md:p-10">
          <h2 className="title-3 flex items-center gap-2 font-bold">
            <GraduationCap /> Tipos de pesquisadores
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4 rounded-md text-justify md:p-6">
              <h2 className="title-3 font-bold">PESQUISADOR SÊNIOR:</h2>
              <p>
                Todo pesquisador afiliado que possua o título de Doutor ou de
                Livre-docente. Em pautas levadas à votação plenária, seu voto
                tem peso 1. O valor da anuidade é de 1/10 do salário mínimo
                vigente no Brasil (em 2025 o Salário Mínimo é de R$1.518,00,
                então a anuidade é de R$ 151,00).
              </p>
            </div>
            <div className="space-y-4 rounded-md text-justify md:p-6">
              <h2 className="title-3 font-bold">PESQUISADOR:</h2>
              <p className="text-justify">
                Todo pesquisador afiliado que possua título de Mestre ou
                certificado de graduação. Em pautas levadas à votação plenária
                seu voto tem peso 0,50. O valor da anuidade é de 1/10 do salário
                mínimo vigente no Brasil (em 2025, a anuidade é de R$ 151,00).
              </p>
            </div>
            <div className="space-y-4 rounded-md text-justify md:p-6">
              <h2 className="title-3 font-bold">PESQUISADOR JÚNIOR:</h2>
              <p className="text-justify">
                Todo estudante-pesquisador, maior de idade (18 anos, segundo a
                legislação brasileira), que esteja regularmente matriculado em
                curso de graduação. Em pautas levadas à votação plenária seu
                voto tem peso 0,25. O valor da anuidade é de 1/20 do salário
                mínimo vigente no Brasil (em 2024, a anuidade é de R$ 75,00).
              </p>
            </div>
            <div className="space-y-4 rounded-md text-justify md:p-6">
              <h2 className="title-3 font-bold">MEMBRO HONORÁRIO:</h2>
              <p className="text-justify">
                Pessoa, maior de idade (segundo a legislação brasileira) que
                tenha sido convidada para participação nesta categoria pela
                RedeCT (com a inclusão aprovada). Nas pautas levadas à votação
                plenária, tem direito a palavra e não ao voto. Não é obrigado ao
                pagamento de anuidade, podendo realizar a doação à RedeCT.
              </p>
            </div>
          </div>
        </div>

        <p className="text-justify">
          Importante destacar que os Pesquisadores afiliados à RedeCT (em
          qualquer uma das modalidades acima) não fazem parte do grupo de
          associados da OSCIP Desenvolvimento Social Humano e Comunitário -
          SocialDHC. Para se associar ao SocialDHC, o interessado deverá
          solicitar esta vinculação e, então, seu nome seguirá os trâmites
          próprios para isso. (Art. 22º do Regimento Interno)
        </p>
        <p className="text-justify">
          Para maiores informações e detalhes consulte o Artigo 18 do Regimento
          Interno da RedeCT.
        </p>
      </section>

      {/* Cards */}
      <section className="flex flex-col gap-8 md:flex-row">
        <NavigationCard.Root href="/quem-somos/pesquisadores-participantes/pesquisadores">
          <div className="flex flex-col gap-4">
            <h2 className="title-3 flex items-center gap-2 font-bold">
              <Users className="text-indigo-500" />
              Pesquisadores Participantes
            </h2>
            <p>
              Conheça os pesquisadores ativos que fazem parte daRedeCT e suas
              contribuições para o desenvolvimento depesquisas sobre povos
              tradicionais.
            </p>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/quem-somos/pesquisadores-participantes/in-memorian">
          <div className="flex flex-col gap-4">
            <h2 className="title-3 flex items-center gap-2 font-bold">
              <Heart className="text-indigo-500" /> Galeria in memorian
            </h2>
            <p>
              Homenageamos aqueles que deixaram sua contribuição e legado junto
              à RedeCT, tanto pesquisadores quanto líderes de povos
              tradicionais.
            </p>
          </div>
        </NavigationCard.Root>
      </section>

      {/* COMO SE FILIAR À REDECT? */}
      <section className="space-y-8">
        <h2 className="title-2">COMO SE FILIAR À REDECT?</h2>
        <OrderedList.Root>
          <OrderedList.Item>
            Conheça a RedeCT, sua missão, seus objetivos e o seu Regimento
            Interno;
          </OrderedList.Item>
          <OrderedList.Item>
            Preencha o formulário de pedido de filiação pelo link 
            <Link
              href="https://forms.gle/Mnwrmq3NCC2QmQcy5"
              target="_blank"
              className="text-indigo-500 hover:underline"
            >
              https://forms.gle/Mnwrmq3NCC2QmQcy5
            </Link>
            ;
          </OrderedList.Item>
          <OrderedList.Item>
            Realizar o pagamento de sua 1ª anuidade (referente ao ano de 2025 -
            de acordo com sua classificação de Pesquisador Filiado). Pela chave
            pix da231105-2947-4343-9214-064b15e45313 (Alexandre de Castro
            Campos).
          </OrderedList.Item>
          <OrderedList.Item>
            Envie os comprovantes de pagamentos para o e-mail 
            <span className="text-indigo-500">filiados@redect.org</span>;
          </OrderedList.Item>
        </OrderedList.Root>
        <aside className="rounded-md bg-yellow-200/40 p-6 break-all">
          <span className="font-bold text-black">⚠️ Atenção:</span> SUGERIMOS
          que você faça primeiro o pagamento de sua inscrição no COLÓQUIO
          INTERN. DA REDECT 2025 (VI Congresso Científico Internacional sobre
          Povos e Comunidades Tradicionais) pelo link 
          <Link
            href="https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/"
            target="_blank"
            className="text-indigo-500 hover:underline"
          >
            https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/
          </Link>
          , e então, desconte R$50,00 (cinquenta reais) do valor de sua anuidade
          a ser depositada via pix (se fizer o inverso, a RedeCT não realizará a
          devolução do valor da inscrição).
        </aside>
      </section>
    </main>
  );
}
