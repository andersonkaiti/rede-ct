import Head from "next/head"
import Image from "next/image"

export default function ColetaneaRedeCT() {
  const volumes = [
    {
      ano: 2024,
      volume: 13,
      prefacio: "Dra. Ana D'Arc Martins Azevedo (Professora Doutora da UNAMA e UEPA)",
      textoPrefacio:
        "Articulada com a pauta dos Povos e Comunidades Tradicionais, especialmente amazônicas, apresenta os treze capítulos aprovados e publicados neste 13º volume do Livro da RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/ebook/c057-povos-originarios-comunidades-tradicionais",
    },
    {
      ano: 2023,
      volume: 12,
      prefacio: "Dra. Raquel Cabral (Professora Doutora da FAAC/UNESP Bauru)",
      textoPrefacio:
        "Sustentada por toda sua contextualização e criticidade, apresenta os dez capítulos aprovados e publicados neste 12º volume do Livro da RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/ebook/b53-povos-originarios-comunidades-tradicionais",
    },
    {
      ano: 2022,
      volume: 11,
      prefacio: "Prof. Dr. Alceu Zoia (UNEMAT)",
      textoPrefacio:
        "De modo crítico ao momento político do Brasil, mas sempre com olhar esperançoso para o futuro, apresenta os doze capítulos aprovados e publicados neste volume do Livro da RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/ebook/647-povos-originarios-comunidades-tradicionais",
    },
    {
      ano: 2021,
      volume: 10,
      prefacio: "Prefácio não disponível",
      textoPrefacio:
        "Volume 10 contendo capítulos aprovados e publicados, com foco em temas atuais sobre Povos Originários e Comunidades Tradicionais.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/360povos",
    },
    {
      ano: 2020,
      volume: 9,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 9 contendo capítulos aprovados e publicados, aprofundando os debates temáticos da RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/360povos",
    },
    {
      ano: 2019,
      volume: 8,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 8 da coletânea com temas diversos dos Povos Originários e Comunidades Tradicionais.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/360povos",
    },
    {
      ano: 2018,
      volume: 7,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 7 consolidando o trabalho da RedeCT em temas ligados às comunidades tradicionais.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/360povos",
    },
    {
      ano: 2017,
      volume: 6,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 6 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/047povos",
    },
    {
      ano: 2016,
      volume: 5,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 5 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/047povos",
    },
    {
      ano: 2015,
      volume: 4,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 4 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/047povos",
    },
    {
      ano: 2014,
      volume: 3,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 3 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/09comunidade",
    },
    {
      ano: 2013,
      volume: 2,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 2 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/501povos",
    },
    {
      ano: 2012,
      volume: 1,
      prefacio: "Prefácio não disponível",
      textoPrefacio: "Volume 1 da coletânea com capítulos aprovados e publicados pela RedeCT.",
      editora: "Editora da UFT - Observatório Edições",
      link: "https://www.editorafi.org/501povos",
    },
  ]

  const requisitos = [
    "Contar sempre com ISBN e ficha catalográfica registrada;",
    "Parcialmente bilíngue, inclusive aceitando trabalhos em inglês, espanhol, português e francês;",
    "Comitê editorial internacional;",
    "Todos os volumes com prefácio;",
    "Publicação com avaliação e selo de editora acadêmica/universitária (Editora da UFRR);",
    "Fluxo editorial regulado e legitimado por meio de edital público de chamamento de propostas de capítulos, contando com avaliação em sistema duplo-cego (double blind review);",
    "Acesso livre e gratuito das obras finais por meio de download de pdf do livro todo;",
    "Índice remissivo de assuntos (do volume e da série toda);",
    "Financiamento institucional pelo Instituto de Pesquisas Amazônicas e de Povos Tradicionais;",
    "Controle de plágio e endogenia institucional;",
    "Exigência de (no mínimo) um doutor no corpo autoral de cada capítulo.",
  ]

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <Head>
        <title>Livro Coletânea RedeCT - Volumes e Publicações</title>
      </Head>

      {/* Header com layout melhorado para a imagem */}
      <header className="text-center px-6 py-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">Livro Coletânea de Capítulos da RedeCT</h1>

        <p className="max-w-3xl mx-auto text-gray-700 text-xl mb-8">
          Série internacional sobre Povos Originários e Comunidades Tradicionais. Conheça os volumes publicados,
          critérios de qualidade e participe da chamada para o volume 14 (2025).
        </p>

        {/* Layout em grid para melhor posicionamento do texto e imagem */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Texto à esquerda */}
          <div className="text-left">
            <p className="mb-2 font-extrabold text-2xl">Publique seu livro na série de livros da RedeCT</p>
            <p className="mb-4 font-semibold">
              Você só paga as taxas de edição final e hospedagem da Editora Fi, a RedeCT não cobra taxas adicionais de
              seus filiados.
            </p>

            <p className="mb-2 font-semibold text-xl">Série na Editora Fi</p>

            <p className="mb-2">
              Desde 2018, a RedeCT mantém um espaço para a publicação de livros de seus Pesquisadores Filiados, a série
              de livros intitulada <strong>&quot;Estudos sobre Povos Originários e Comunidades Tradicionais&quot;</strong>,
              contando com comitê editorial internacional.
            </p>

            <p className="mb-2">
              A série de livros está hospedada no website da EDITORA FI (clique na figura ao lado ou acesse o link{" "}
              <a
                href="https://editorafi.org/povos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:underline font-semibold"
              >
                editorafi.org/povos
              </a>
              ) e segue a política internacional de acesso livre/gratuito aos interessados na leitura da obra final (é
              só o leitor baixar o arquivo em pdf), mas se preferir o livro físico é só fazer o pedido no próprio
              website e não precisa comprar lote (o orçamento e a remessa pode ser de apenas um exemplar).
            </p>

            <p className="mt-4 italic text-sm text-gray-600">
              Responsável: Me. Isaltina Santos da Costa Oliveira (TINA).
            </p>
          </div>

          {/* Imagem à direita, maior e melhor posicionada */}
          <div className="flex justify-center items-center">
            <div className="rounded-lg shadow-lg border border-gray-300 p-2 max-w-full">
              <picture className="w-full h-auto rounded-md">
                <Image
                  src="https://redect.org/novaredect/images/2024/04/03/serie-na-fi.png"
                  alt="Série Estudos sobre Povos Originários e Comunidades Tradicionais"
                  fill
                  className="object-contain overflow-hidden"
                />
              </picture>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20 space-y-20">
        {/* Apresentação */}
        <section>
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            Apresentação da série de livros da RedeCT
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A RedeCT reúne uma coletânea crescente de capítulos de livros, com mais de 150 capítulos publicados. A série
            apresenta pesquisas e trabalhos de extensão universitária sobre Povos Originários e Comunidades
            Tradicionais, com rigor editorial e visibilidade acadêmica internacional.
          </p>
        </section>

        {/* Chamada para publicação */}
        <section>
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            Chamada para publicação do volume 14 (2025)
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            O período de submissão para propostas de capítulos do volume 14 foi prorrogado até 31 de maio de 2025. O
            envio deve incluir o arquivo completo do capítulo (Word e PDF), conforme edital oficial. Dúvidas podem ser
            esclarecidas pelo e-mail{" "}
            <a href="mailto:livroredect@gmail.com" className="text-indigo-600 hover:underline">
              livroredect@gmail.com
            </a>
            .
          </p>
          <p className="text-center">
            <a
              href="https://onedrive.live.com/embed?cid=6afd3e4c750a5cf9&id=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&resid=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&ithint=file,pdf&embed=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy82YWZkM2U0Yzc1MGE1Y2Y5L0lRU1MtbEZrdy1JUFJZZWFwZHZEa2MzYUFlS2h1Tld4c0ZGRURJbjdKTnlrOHVj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-700 text-white py-2 px-6 rounded shadow hover:bg-indigo-800 transition"
            >
              Acessar Edital do Volume 14 (2025)
            </a>
          </p>
        </section>

        {/* Requisitos CAPES */}
        <section>
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            Requisitos de qualidade do sistema CAPES-Livro atendidos
          </h2>
          <ul className="max-w-4xl mx-auto list-disc list-inside text-gray-700 space-y-2">
            {requisitos.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-4xl mx-auto text-gray-600 italic text-sm text-center">
            Quanto mais citações destas obras, melhores tendem a ser as avaliações da RedeCT pela CAPES.
          </p>
        </section>

        {/* Volumes publicados */}
        <section>
          <h2 className="text-3xl font-semibold text-black mb-8 text-center">
            Acesso aos volumes já publicados e índice remissivo por assunto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {volumes.map(({ ano, volume, prefacio, textoPrefacio, editora, link }) => (
              <div
                key={volume}
                className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
              >
                <h3 className="text-xl font-bold text-black mb-3">
                  Volume {volume} ({ano})
                </h3>
                <p className="text-gray-800 mb-2 font-semibold">{prefacio}</p>
                <p className="text-gray-700 mb-2 leading-relaxed">{textoPrefacio}</p>
                <p className="text-gray-600 mb-4 italic">{editora}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  Acessar volume completo
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-20 text-center text-sm text-gray-500">
        © 2024 RedeCT - Vice-coordenadoria Científica da RedeCT
      </footer>
    </div>
  )
}