export default function ArtigosCientificos() {
  return (
    <main className="max-w-7xl mx-auto p-10 font-sans text-gray-800 bg-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-black">
        Artigos Científicos de Interesse
      </h1>
      <p className="text-gray-700 max-w-4xl leading-relaxed mb-8">
        Nesta seção (<span className="text-red-600 font-bold">AINDA EM CONSTRUÇÃO</span>) serão publicadas as apresentações e links de acesso a artigos científicos publicados em periódicos e que sejam de interesse dos Pesquisadores Filiados à RedeCT (artigos com temas relacionados aos Povos Tradicionais). <span className="text-red-600 font-bold">ESTA ÁREA AINDA ESTÁ EM CONSTRUÇÃO.</span>
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Listagem de Artigos Científicos de Interesse (Artigos Publicados em Periódicos/Revistas Científicas)
        </h2>
        <p className="text-gray-700 max-w-4xl leading-relaxed mb-4">
          Nesta área, a RedeCT traz alguns artigos publicados em periódicos e que são de alto interesse dos pesquisadores da RedeCT.
        </p>

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm max-w-4xl">
          <p className="mb-2 font-semibold text-gray-900">
            CARVALHO, José Jorge de. Notório saber para os Mestres e Mestras dos Povos e Comunidades Tradicionais: uma revolução no mundo acadêmico brasileiro. Revista UFMG, v.28, n.1, p. 54-77, jan./abr. 2021. Belo Horizonte/MG: UFMG, 2021.
          </p>
          <a
            href="https://periodicos.ufmg.br/index.php/revistadaufmg/article/view/29103"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Acessar artigo
          </a>
        </div>
      </section>
    </main>
  );
}
