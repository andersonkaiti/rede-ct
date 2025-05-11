import Link from "next/link";
import * as Tabs from "@components/ui/tabs";
import { MembroCard } from "@components/membro-card";
import { OrderedList } from "@components/ordered-list";
import { getPesquisadores } from "@api/pesquisadores/route";
import { getInMemorianPesquisadores } from "@api/in-memorian-pesquisadores/route";
import { getInMemorianLideresPovosTradicionais } from "@api/in-memorian-lideres-tradicionais/route";

export default async function PesquisadoresParticipantes() {
  const [
    pesquisadores,
    inMemorianPesquisadores,
    inMemorianLideresPovosTradicionais,
  ] = await Promise.all([
    getPesquisadores(),
    getInMemorianPesquisadores(),
    getInMemorianLideresPovosTradicionais(),
  ]);

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <section className="space-y-14">
        <h1 className="text-5xl font-extrabold">
          Pesquisadores Filiados à RedeCT
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção você encontra informações sobre como se filiar à Rede,
          sobre a classificação dos Pesquisadores Filiados segundo o Regimento
          Interno da Rede e ainda o acesso à listagem dos Pesquisadores Filiados
          da RedeCT.
        </p>
      </section>
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">COMO SE FILIAR À REDECT?</h1>
        <OrderedList.Root>
          <OrderedList.Item>
            Conheça a RedeCT, sua missão, seus objetivos e o seu Regimento
            Interno;
          </OrderedList.Item>
          <OrderedList.Item>
            Preencha o formulário de pedido de filiação pelo link 
            <Link
              href="https://forms.gle/Mnwrmq3NCC2QmQcy5"
              className="text-indigo-500 hover:underline"
            >
              https://forms.gle/Mnwrmq3NCC2QmQcy5
            </Link>
          </OrderedList.Item>
          <OrderedList.Item>
            Realizar o pagamento de sua 1ª anuidade (referente ao ano de 2025 -
            de acordo com sua classificação de Pesquisador Filiado). Pela chave
            pix da231105-2947-4343-9214-064b15e45313 (Alexandre de Castro
            Campos).
          </OrderedList.Item>
          <aside className="-ml-10">
            <span className="font-bold text-black">Atenção:</span> SUGERIMOS que
            você faça primeiro o pagamento de sua inscrição no COLÓQUIO INTERN.
            DA REDECT 2025 (VI Congresso Científico Internacional sobre Povos e
            Comunidades Tradicionais) pelo link 
            <Link
              href="https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/"
              className="text-indigo-500 hover:underline"
            >
              https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/
            </Link>
            , e então, desconte R$50,00 (cinquenta reais) do valor de sua
            anuidade a ser depositada via pix (se fizer o inverso, a RedeCT não
            realizará a devolução do valor da inscrição).
          </aside>
          <OrderedList.Item>
            Envie os comprovantes de pagamentos para o e-mail 
            <span className="text-indigo-500">filiados@redect.org</span>
          </OrderedList.Item>
          <OrderedList.Item>
            <span className="font-bold text-black">Atenção:</span> SUGERIMOS que
            você faça primeiro o pagamento de sua inscrição no COLÓQUIO INTERN.
            DA REDECT 2025 (VI Congresso Científico Internacional sobre Povos e
            Comunidades Tradicionais) pelo link 
            <Link
              href="https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/s"
              className="text-indigo-500 hover:underline"
            >
              https://www.even3.com.br/vi-congresso-internacional-sobre-povos-e-comunidades-tradicionais-536811/
            </Link>
            , e então, desconte R$50,00 (cinquenta reais) do valor de sua
            anuidade a ser depositada via pix (se fizer o inverso, a RedeCT não
            realizará a devolução do valor da inscrição).
          </OrderedList.Item>
        </OrderedList.Root>
      </section>
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">
          CATEGORIAS DE PESQUISADORES FILIADOS, VALOR DE ANUIDADE E PESO DO
          VOTO:
        </h1>
        <p className="text-justify text-gray-500">
          De acordo com o Art. 13 do Regimento Interno, os PESQUISADORES
          FILIADOS à RedeCT são classificados segundo sua titulação e conforme
          modo de ingresso, conforme cláusulas específicas constantes do
          Regimento Interno da Rede.
        </p>
        <p className="text-justify text-gray-500">
          <span className="font-bold text-black">PESQUISADOR SÊNIOR:</span> todo
          pesquisador afiliado que possua o título de Doutor ou de
          Livre-docente. Em pautas levadas à votação plenária, seu voto tem peso
          1. O valor da anuidade é de 1/10 do salário mínimo vigente no Brasil
          (em 2025 o Salário Mínimo é de R$1.518,00, então a anuidade é de R$
          151,00).
        </p>
        <p className="text-justify text-gray-500">
          <span className="font-bold text-black">PESQUISADOR:</span> todo
          pesquisador afiliado que possua título de Mestre ou certificado de
          graduação. Em pautas levadas à votação plenária seu voto tem peso
          0,50. O valor da anuidade é de 1/10 do salário mínimo vigente no
          Brasil (em 2025, a anuidade é de R$ 151,00).
        </p>
        <p className="text-justify text-gray-500">
          <span className="font-bold text-black">PESQUISADOR JÚNIOR:</span> todo
          estudante-pesquisador, maior de idade (18 anos, segundo a legislação
          brasileira), que esteja regularmente matriculado em curso de
          graduação. Em pautas levadas à votação plenária seu voto tem peso
          0,25. O valor da anuidade é de 1/20 do salário mínimo vigente no
          Brasil (em 2024, a anuidade é de R$ 75,00).
        </p>
        <p className="text-justify text-gray-500">
          <span className="font-bold text-black">MEMBRO HONORÁRIO:</span>
           pessoa, maior de idade (segundo a legislação brasileira) que tenha
          sido convidada para participação nesta categoria pela RedeCT (com a
          inclusão aprovada). Nas pautas levadas à votação plenária, tem direito
          a palavra e não ao voto. Não é obrigado ao pagamento de anuidade,
          podendo realizar a doação à RedeCT.
        </p>
        <p className="text-justify text-gray-500">
          Importante destacar que os Pesquisadores afiliados à RedeCT (em
          qualquer uma das modalidades acima) não fazem parte do grupo de
          associados da OSCIP Desenvolvimento Social Humano e Comunitário -
          SocialDHC. Para se associar ao SocialDHC, o interessado deverá
          solicitar esta vinculação e, então, seu nome seguirá os trâmites
          próprios para isso. (Art. 22º do Regimento Interno)
        </p>
        <p className="text-justify text-gray-500">
          Para maiores informações e detalhes consulte o Artigo 18 do Regimento
          Interno da RedeCT.
        </p>
      </section>
      <section>
        <Tabs.Root defaultValue="Pesquisador Sênior">
          <Tabs.List className="w-full">
            {pesquisadores.map(({ type }, index: number) => (
              <Tabs.Trigger key={index} value={type}>
                {type}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {pesquisadores.map(({ members, type }, index: number) =>
            members.map(({ name, info }) => (
              <Tabs.Content key={`${index}-${name}`} value={type}>
                <p className="text-gray-500">
                  <span className="font-bold text-black">{name}</span> {info}
                </p>
              </Tabs.Content>
            )),
          )}
        </Tabs.Root>
      </section>
      <section className="space-y-14">
        <h1 className="text-4xl font-bold">
          GALERIA IN MEMORIAM DE PESQUISADORES DA REDECT
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção você encontra informações sobre como se filiar à Rede,
          sobre a classificação dos Pesquisadores Filiados segundo o Regimento
          Interno da Rede e ainda o acesso à listagem dos Pesquisadores Filiados
          da RedeCT.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {inMemorianPesquisadores.map((member, index: number) => (
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
      <section className="space-y-14">
        <h1 className="text-4xl font-bold">
          GALERIA IN MEMORIAM DE LÍDERES DE POVOS TRADICIONAIS
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção, mantemos nossa homenagem aos líderes de Povos
          Tradicionais falecidos e que deixaram sua contribuição e legado na
          luta de resistência e de emancipação efetiva de seus povos e
          comunidades.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {inMemorianLideresPovosTradicionais.map((member, index: number) => (
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
    </main>
  );
}
