import Image from "next/image";

export default function ParceirosEFinanciadores() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          PARCERIAS INSTITUCIONAIS E FINANCIAMENTOS
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>
      <section className="space-y-14">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="relative h-48 w-full lg:flex-1">
            <Image
              src="/images/parceiro-1.png"
              alt="CITeBauru"
              className="absolute object-contain"
              fill
            />
          </div>
          <p className="flex-2 text-justify text-gray-500">
            No Edital 01/2024{" "}
            <span className="font-bold text-black">
              da Saruê Incubadora/CITEB Bauru
            </span>
            , instituições ligadas à 
            <span className="font-bold text-black">FUNDUNESP</span> e
            localizadas na UNESP Bauru (e em parceria com a 
            <span className="font-bold text-black">Whadawani Foundation</span>),
            um projeto da RedeCT foi selecionado para ser pré-incubado na
            perspectiva de estrutura, fluxo e sustentabilidade negocial liagado
            à inovação. Trata-se da proposta de criação do Selo de Indicador de
            Procedência Tradicional pela RedeCT (no sentido de auxiliar os povos
            e comunidades tradicionais na organização de seus projetos de
            geração de renda). Também via SARUÊ Incubadora/CITEB/UNESP, a RedeCT
            está sendo preparada para ser incubada enquanto Organização Social
            na perspectiva de gestão de tecnologias e redes sociais on-line.
            Parceria iniciada em 28/03/2024
          </p>
        </div>
      </section>
    </main>
  );
}
