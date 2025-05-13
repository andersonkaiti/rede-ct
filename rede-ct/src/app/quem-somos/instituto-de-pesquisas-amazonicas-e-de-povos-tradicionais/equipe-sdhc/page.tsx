import { getEquipeSdhc } from "@actions/equipe-sdhc";
import { MembroCard } from "@components/membro-card";

export default async function EquipeSdhc() {
  const equipeSdhc = await getEquipeSdhc();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <h1 className="title-2">
        Atual equipe de gestão da associação Social Desenvolvimento Humano e
        Comunitário:
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {equipeSdhc.map((member, index: number) => (
          <MembroCard.Root key={index}>
            <MembroCard.Image src={member.image.src} alt={member.image.alt} />
            <div className="flex flex-grow flex-col items-center justify-between gap-4">
              <h1 className="text-center text-xl font-bold">{member.name}</h1>
              <h2 className="text-center font-bold">{member.role}</h2>
            </div>
          </MembroCard.Root>
        ))}
      </div>
    </main>
  );
}
