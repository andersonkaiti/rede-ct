import { getEquipeGestao } from "@actions/equipe-gestao";
import { MembroCard } from "@components/membro-card";

export default async function EquipeDeGestao() {
  const sections = await getEquipeGestao();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      {sections.map((section, index: number) => (
        <section key={index} className="space-y-8 md:space-y-14">
          <h1 className="text-center text-5xl font-extrabold">
            {section.title}
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {section.members.map((member, index: number) => (
              <MembroCard.Root key={index}>
                <MembroCard.Image
                  src={member.image.src}
                  alt={member.image.alt}
                />
                <div className="flex flex-grow flex-col items-center justify-between gap-4">
                  <h1 className="text-center text-xl font-bold">
                    {member.name}
                  </h1>
                  <h2 className="text-center font-bold">{member.role}</h2>
                  <MembroCard.Button href={member.lattesUrl} />
                </div>
              </MembroCard.Root>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
