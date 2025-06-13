export default function LivrosECapitulos() {
  return (
    <main className="max-w-7xl mx-auto p-10 font-sans text-gray-800 bg-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-black">
        Livros e Capítulos de Interesse
      </h1>
      <p className="text-gray-700 max-w-4xl leading-relaxed mb-8">
        Nesta seção (<span className="text-red-600 font-bold">AINDA EM CONSTRUÇÃO</span>) serão publicadas as apresentações e links de acesso a livros e capítulos de interesse dos Pesquisadores Filiados da RedeCT (obras com temas relacionados aos Povos Tradicionais). <span className="text-red-600 font-bold">ESTA ÁREA AINDA ESTÁ EM CONSTRUÇÃO.</span>
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Listagem de Obras de Interesse (Livros e Capítulos)
        </h2>

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm max-w-4xl">
          <p className="mb-2 font-semibold text-gray-900">
            BRANDÃO, Carlos Rodrigues. A comunidade tradicional. In: UDRY, C.; EIDT, J.S. Conhecimento tradicional: conceitos e marco legal. Brasília/DF: Embrapa, 2015, p. 20-101.
          </p>
          <a
            href="https://onedrive.live.com/download?resid=6AFD3E4C750A5CF9%21118&authkey=!AH7WCQ1b0x72wSw&em=2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Acessar
          </a>
        </div>
      </section>
    </main>
  );
}
