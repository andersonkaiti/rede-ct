export default function CongressoCientificoInternacional() {
  return (
    <main className="mx-auto max-w-7xl space-y-12 p-4 py-10 md:p-10">
      {/* Título principal */}
      <section className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-blue-900 md:text-4xl">
          V CCI DA REDECT
        </h1>
        <p className="text-lg font-medium text-gray-600">
          18 a 22 de Novembro de 2024
        </p>
      </section>

      {/* Seção V Congresso */}
      <section className="space-y-6 rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            V CONGRESSO CIENTÍFICO INTERNACIONAL DA REDECT
          </h2>
          <p className="text-lg font-medium text-blue-700">
            BRASIL (Bauru/SP) e MOÇAMBIQUE
          </p>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>
        <div className="space-y-4 text-justify text-gray-700">
          <p>
            O V Congresso Científico Internacional será realizado, de modo
            simultâneo e integrado no Moçambique e no Brasil, sendo a primeira
            experiência multicêntrica de gestão do congresso entre dois países
            de continentes diferentes.
          </p>
          <p>
            No <strong>BRASIL</strong> as atividades serão geradas e mediadas a
            partir da
            <strong> FAAC/UNESP</strong> (Faculdade de Arquitetura, Artes,
            Comunicação e Design) de Bauru - estado de São Paulo. No continente
            africano, as atividades serão geradas e mediadas a partir da{" "}
            <strong>Escola Superior de Jornalismo</strong>
            (Maputo/Moçambique) e <strong>Universidade Licungo</strong>{" "}
            (Beira/Moçambique), sempre com o apoio de pesquisadores integrados à
            RedeCT e ao Programa DINTER do PPGCOM/FAAC/UNESP.
          </p>
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">O Evento contará com:</p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• 6 conferências internacionais</li>
              <li>• 10 Mesas-redondas</li>
              <li>• 13 minicursos, palestras e workshops</li>
              <li>• Apresentação de mais de 160 trabalhos em 23 GTs</li>
              <li>• Atividades culturais e homenagens</li>
              <li>• Lançamento de livros</li>
              <li>• Falas de lideranças de Povos e Comunidades Tradicionais</li>
            </ul>
            <p className="mt-3 font-bold text-blue-700">PARTICIPE!!!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              text: "Link para o CCI",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
            {
              text: "Edital geral",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
            {
              text: "Cronograma",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
            {
              text: "Programação",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white p-4 text-center text-blue-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
            >
              <img src={item.icon} alt="" className="h-5 w-5" />
              <span className="font-medium">{item.text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Seção Patrocinadores */}
      <section className="space-y-6 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">
          Colaboradores e Patrocinadores
        </h2>
        <p className="text-gray-600">
          Para a efetivação deste Congresso na UNESP, a RedeCT contou com o
          apoio, a colaboração e o patrocínio de pessoas e instituições, dentre
          estas, destacamos agradecimentos institucionais para:
        </p>
        <p className="text-justify">
          Para a efetivação deste Congresso na UNESP, a RedeCT contou com o
          apoio, a colaboração e o patrocínio de pessoas e instituições, dentre
          estas, destacamos agradecimentos institucionais para:
        </p>
        <div className="grid grid-cols-2 gap-6 py-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {[
            { src: "/images/divisão-cientifica/logos/unesp.png", alt: "UNESP" },
            { src: "/images/divisão-cientifica/logos/faac.png", alt: "FAAC" },
            { src: "/images/divisão-cientifica/logos/india.png", alt: "INDIA" },
            {
              src: "/images/divisão-cientifica/logos/unimed.png",
              alt: "UNIMED",
            },
            { src: "/images/divisão-cientifica/logos/proec.png", alt: "PROEC" },
            {
              src: "/images/divisão-cientifica/logos/midia e tecnologia.png",
              alt: "Mídia e Tecnologia",
            },
            { src: "/images/divisão-cientifica/logos/ppg.png", alt: "PPG" },
            {
              src: "/images/divisão-cientifica/logos/comunicao.png",
              alt: "Comunicação Social",
            },
          ].map((logo, index) => (
            <div
              key={index}
              className="flex h-32 items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Seção IV Congresso */}
      <section className="space-y-6 rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            IV CCI DA REDECT
          </h2>
          <p className="text-lg font-medium text-blue-700">
            07 a 10 de Novembro de 2023
          </p>
          <h3 className="text-xl font-semibold text-gray-700">
            IV CONGRESSO CIENTÍFICO INTERNACIONAL DA REDECT
          </h3>
          <p className="text-gray-600">UNAMA - BELÉM / PARÁ / BRASIL</p>
          <div className="mx-auto h-1 w-16 bg-blue-600"></div>
        </div>
        <div className="space-y-4 text-justify text-gray-700">
          <p>
            O IV CCI da RedeCT foi realizado de 07 a 10 de novembro de 2023, em
            formato híbrido, com atividades presenciais realizadas nas
            dependências da Universidade da Amazônia - UNAMA, em Belém (Estado
            do Pará - Amazônia Brasileira) e com atividades remotas (on-line)
            mediadas e coordenadas pela equipe do GEDGS e da RedeCT em Bauru
            (Estado de São Paulo - Brasil).
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {[
            {
              text: "Relatório administrativo",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
            {
              text: "Anais do IV CCI da RedeCT",
              icon: "/images/divisão-cientifica/Vector (1).svg",
            },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-2 rounded-lg border border-blue-100 bg-blue-50 px-6 py-3 text-blue-700 transition-all hover:bg-blue-100 hover:shadow-md"
            >
              <img src={item.icon} alt="" className="h-5 w-5" />
              <span className="font-medium">{item.text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Notícias */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Galeria de Fotos
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-blue-600"></div>
            <p className="text-lg text-gray-600">
              Registros marcantes do IV Congresso Científico Internacional da
              RedeCT
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Notícia 1 */}
            {/* Notícia 1 - Cerimônia de Abertura */}
            <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/cerimonia.png"
                  alt="Cerimônia de Abertura do IV CCI da RedeCT"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                    Evento
                  </span>
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900">
                  Cerimônia de Abertura do IV CCI da RedeCT (no auditório da
                  UNAMA - Belém - PA)
                </h3>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    07/11/2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
                <p className="mb-4 flex-1 text-gray-600">
                  Cerimonialista: Maria do Socorro Souza Nobre, Profa. Magali
                  Pinto Gouvêa, Prof. Dr. João Claudio Arroyo (Coordenador do
                  Curso de Pós-graduação em Gestão de Conhecimentos -
                  PPGC/UNAMA), Profa. Dra. Ana D'Arc Martins de Azevedo
                  (Coordenadora Geral do IV CCI da RedeCT), Prof. Me. Eden
                  Ferreira (Pró-reitor de Ensino da UNAMA), Prof. Dr. Edgar
                  Chagas (Coordenador do Programa de Pós-graduação em
                  Comunicação, Linguagens e Culturas - PPGCLC/UNAMA).
                </p>
              </div>
            </div>

            {/* Notícia 2 */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/momento-fala.png"
                  alt="Fala de representantes indígenas no IV CCI"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-green-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.922 1.126 1.176 1.772.24.642.383 1.38.434 2.457.048 1.067.057 1.407.057 4.123 0 2.716-.01 3.056-.057 4.122-.05 1.066-.218 1.793-.434 2.428-.254.66-.6 1.216-1.153 1.772-.5.51-1.126.922-1.772 1.176-.642.24-1.38.383-2.457.434-1.067.048-1.407.057-4.123.057-2.716 0-3.056-.01-4.122-.057-1.065-.05-1.79-.218-2.428-.434-.66-.254-1.216-.6-1.772-1.153-.51-.5-.922-1.126-1.176-1.772-.24-.642-.383-1.38-.434-2.457-.048-1.066-.057-1.406-.057-4.123 0-2.716.01-3.056.057-4.122.05-1.066.217-1.793.434-2.428.254-.66.598-1.216 1.153-1.772.5-.51 1.126-.922 1.772-1.176.642-.24 1.38-.383 2.457-.434 1.066-.048 1.407-.057 4.123-.057zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.857.344-.466.182-.8.4-1.15.748-.35.35-.566.684-.748 1.15-.137.352-.3.88-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.857.182.466.4.8.748 1.15.35.35.684.566 1.15.748.352.137.88.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.977-.045 1.505-.207 1.857-.344.466-.182.8-.4 1.15-.748.35-.35.566-.684.748-1.15.137-.352.3-.88.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.857-.182-.466-.4-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.352-.137-.88-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058z" />
                      <path d="M12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    Cultura Indígena
                  </span>
                </div>
                <h3 className="mb-3 text-2xl leading-tight font-bold text-gray-900">
                  Momento da fala de representantes indígenas
                </h3>
                <div className="mb-4 text-sm text-gray-500">
                  <span className="mr-4 inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    08 Nov 2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
                <p className="mb-4 text-gray-600">
                  Ymyni, Time'i e Matuja, do Povo/etnia Awaete-Assurini, da
                  região do médio rio Xingu (floresta amazônica - Brasil).
                </p>
              </div>
            </div>

            {/* Notícia 3 */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/apresentacao.png"
                  alt="Apresentação indígena"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    Apresentações
                  </span>
                </div>
                <h3 className="mb-3 text-2xl leading-tight font-bold text-gray-900">
                  Apresentação da perspectiva indígena do Povo Awaete-Assurini
                  do Xingu, da região de Altamira, no médio Xingu
                </h3>
                <div className="mb-4 text-sm text-gray-500">
                  <span className="mr-4 inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    09 Nov 2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
                <p className="mb-4 text-gray-600">
                  Da esquerda para a direita os aprendizes Ananu e Kyri, doutora
                  Tauwywa Matuia, mestre Pajé Arapuaywa e Tywaywa Ymyni e mestre
                  Pajé Tywaywa Time'i (integrantes do "Ureyau Jemu'e Awuma -
                  Coletivo de Pesquisadores Autônomos da Ciência Awete", da
                  família Marytykwawara e do Instituto Janeraka).
                </p>
              </div>
            </div>

            {/* Notícia 4 */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/prof.png"
                  alt="Apresentação da perspectiva indígena do Povo Awaete-Assurini"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-6.726 1.455 1.403-8 8.197z" />
                    </svg>
                    Perspectiva Indígena
                  </span>
                </div>
                <h3 className="mb-3 text-2xl leading-tight font-bold text-gray-900">
                  Profa. Ma. Raimunda Gomes Maciel, Prof. Esp. Carlos Júnior
                  Gemaque Costa, Prof. Dr. Tiago Tendai Chingore (Universidade
                  Licungo - MOÇAMBIQUE), Profa. Esp. Natália Cristina dos Santos
                  Silva da Costa).
                </h3>
                <div className="mb-4 text-sm text-gray-500">
                  <span className="mr-4 inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    10 Nov 2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
              </div>
            </div>

            {/* Notícia 5 */}
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/dra.png"
                  alt="Coordenadora do evento"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-6.726 1.455 1.403-8 8.197z" />
                    </svg>
                    Coordenação
                  </span>
                </div>
                <h3 className="mb-3 text-2xl leading-tight font-bold text-gray-900">
                  Dra. Ana D'Arc Martins de Azevedo (UNAMA e UEPA), Coordenadora
                  Geral Local do IV Congresso Científico Internacional da
                  RedeCT.
                </h3>
                <div className="mb-4 text-sm text-gray-500">
                  <span className="mr-4 inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    11 Nov 2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
              </div>
            </div>

            {/* Notícia 2 - Parceria UNAMA */}
            <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/images/divisão-cientifica/noticias/UNAMA.png"
                  alt="Parceria UNAMA"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    Parceria
                  </span>
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900">
                  A UNAMA - Universidade da Amazônia é parceira da RedeCT e
                  cedeu gratuitamente as suas estruturas em Belém (Pará -
                  Brasil) para sediar o IV Congresso Científico Internacional da
                  RedeCT em 2023 .
                </h3>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                    </svg>
                    2023
                  </span>
                  <span className="inline-flex items-center">
                    <svg
                      className="mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    UNAMA - Belém/PA
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  <p className="line-clamp-2">
                    <span className="font-medium">Local:</span> Campus da UNAMA
                    - Alcindo Cacela, Belém/PA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
              Ver Mais Notícias
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
