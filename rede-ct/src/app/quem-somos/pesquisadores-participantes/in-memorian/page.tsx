import { getInMemorianLideresPovosTradicionais } from "@actions/in-memorian-lideres-tradicionais";
import { getInMemorianPesquisadores } from "@actions/in-memorian-pesquisadores";
import { MembroCard } from "@components/membro-card";

export default async function InMemorian() {
  const [inMemorianPesquisadores, inMemorianLideresPovosTradicionais] =
    await Promise.all([
      getInMemorianPesquisadores(),
      getInMemorianLideresPovosTradicionais(),
    ]);

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <h1 className="title-1 text-center">Galeria in memoriam 💐</h1>
      <section className="space-y-8">
        <h2 className="title-2">Pesquisadores da RedeCT 🎓</h2>
        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos saudosos Pesquisadores
          Filiados falecidos que deixaram sua contribuição e legado junto à
          RedeCT.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {inMemorianPesquisadores.map((member, index: number) => (
          <MembroCard.Root key={index}>
            <MembroCard.Image src={member.image.src} alt={member.image.alt} />
            <div className="flex flex-grow flex-col items-center justify-between gap-4">
              <h1 className="text-center text-xl font-bold">{member.name}</h1>
              <h2 className="text-center font-bold">{member.date}</h2>
              <h2 className="text-center font-bold">{member.role}</h2>
            </div>
          </MembroCard.Root>
        ))}
      </section>
      <section className="space-y-8">
        <h2 className="title-2">Povos Tradicionais 🌎</h2>

        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos líderes de Povos
          Tradicionais falecidos e que deixaram sua contribuição e legado na
          luta de resistência e de emancipação efetiva de seus povos e
          comunidades.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {inMemorianLideresPovosTradicionais.map((member, index: number) => (
          <MembroCard.Root key={index}>
            <MembroCard.Image src={member.image.src} alt={member.image.alt} />
            <div className="flex flex-grow flex-col items-center justify-between gap-4">
              <h1 className="text-center text-xl font-bold">{member.name}</h1>
              <h2 className="text-center font-bold">{member.date}</h2>
              <h2 className="text-center font-bold">{member.role}</h2>
            </div>
          </MembroCard.Root>
        ))}
      </section>
    </main>
  );
}
