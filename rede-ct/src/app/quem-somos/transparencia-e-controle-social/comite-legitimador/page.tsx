import { getComiteLegitimador } from "@actions/comite-legitimador";
import { MembroCard } from "@components/membro-card";

export default async function ComiteLegitimador() {
  const comiteLegitimador = await getComiteLegitimador();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <h2 className="title-1 text-center">
        Composição do Comitê Legitimador da RedeCT
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {comiteLegitimador.map((member, index: number) => (
          <MembroCard.Root key={index}>
            <MembroCard.Image src={member.image.src} alt={member.image.alt} />
            <div className="flex flex-grow flex-col items-center justify-between gap-4">
              <h1 className="text-center text-xl font-bold">{member.name}</h1>
              <h2 className="text-center font-bold">{member.role}</h2>
            </div>
          </MembroCard.Root>
        ))}
      </div>
      <p className="text-justify">
        Sob responsabilidade da Vice-coordenadoria de Extensão Universitária e
        Cultura, o Comitê Legitimador é composto pelo Vice-coordenador de
        Extensão e Cultura (que tem a responsabilidade de organizar as pautas e
        reuniões, tendo direito à palavra e ao voto de minerva) e mais 7 membros
        representantes das áreas de Antropologia e Museologia e de cinco povos
        tradicionais diferentes, todos com direito à palavra e ao voto (sob
        presidência do vice-coordenador que tem voto de minerva em caso de
        empate). O Secretário Geral tem direito à palavra, mas não tem direito
        ao voto.
      </p>
    </main>
  );
}
