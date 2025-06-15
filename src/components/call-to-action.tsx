export default function CallToAction() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Interessado em colaborar?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A RedeCT está sempre aberta a novas parcerias e colaborações. Entre em contato conosco para saber como
            participar de nossos projetos e iniciativas de ciência e tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
              Entre em Contato
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
