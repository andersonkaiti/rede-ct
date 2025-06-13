import Head from "next/head";
import Image from "next/image";

export default function PeriodicoERevistasParceiras() {
  const revistas = [
    {
      id: 1,
      nome: "Revista Observatório",
      descricao:
        "Criada em 2015, com política editorial bilíngue e avaliação Capes/Qualis A2. Parceria entre OPAJE/UFT e GEDGS/UNESP.",
      url: "https://sistemas.uft.edu.br/periodicos/index.php/observatorio/index",
      imagem: "https://redect.org/novaredect/images/2024/03/27/observatorio.png",
    },
    {
      id: 2,
      nome: "Revista de Educação da UNEMAT",
      descricao:
        "Publicação da Universidade do Estado de Mato Grosso, voltada para temas educacionais.",
      url: "https://periodicos.unemat.br/index.php/ppgedu/index",
      imagem: "https://redect.org/novaredect/images/2024/03/27/revista-faed_ppgedu_unemat.png",
    },
    {
      id: 3,
      nome: "Revista Territorial - UEG",
      descricao:
        "Criada em 2012, promove debates sobre espacialização de objetos e fenômenos em diversas escalas, com apoio do PPGEO/UEG.",
      url: "https://www.revista.ueg.br/index.php/territorial",
      imagem: "https://redect.org/novaredect/images/2024/03/27/revista-territorial.png",
    },
  ];

  function RevistaCard({ nome, descricao, url, imagem }: { nome: string, descricao: string, url: string, imagem: string }) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition border border-gray-100">
        <picture className="w-full h-40 object-contain mb-4 rounded-md">
          <Image
            src={imagem}
            alt={nome}
            fill
            className="object-contain overflow-hidden"
          />
        </picture>
        <h2 className="text-lg font-semibold text-indigo-900 mb-2">{nome}</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{descricao}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline font-medium"
        >
          Acessar publicação
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <Head>
        <title>Periódico da RedeCT</title>
      </Head>

      <header className="text-center px-6 py-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black mb-6">
          Periódico Científico da RedeCT
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          A RedeCT está orientada para a criação de sua Revista Científica, com identidade específica entre universidade, ciência e Povos Tradicionais.
        </p>
      </header>

      <main className="px-6 pb-20 max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Uma breve explicação</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Este é um projeto audacioso e complexo, exigindo planejamento técnico, editorial e político. Enquanto o periódico não está pronto, fortalecemos nossa presença científica através de revistas parceiras.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-800 mb-6 text-center">
            Revistas Científicas Parceiras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revistas.map((revista) => (
              <RevistaCard
                key={revista.id}
                nome={revista.nome}
                descricao={revista.descricao}
                url={revista.url}
                imagem={revista.imagem}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-10 text-center text-sm text-gray-500">
        Vice-coordenadoria Científica da RedeCT
      </footer>
    </div>
  );
}

