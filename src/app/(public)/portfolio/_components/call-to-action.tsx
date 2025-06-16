export default function CallToAction() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Interessado em colaborar?
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            A RedeCT está sempre aberta a novas parcerias e colaborações. Entre
            em contato conosco para saber como participar de nossos projetos e
            iniciativas de ciência e tecnologia.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-md bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
              Entre em Contato
            </button>
            <button className="rounded-md border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
