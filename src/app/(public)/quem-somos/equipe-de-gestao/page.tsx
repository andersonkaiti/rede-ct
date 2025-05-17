import { getEquipeGestao } from "@actions/equipe-gestao";
import { UserCard } from "@components/user-card";

export default async function EquipeDeGestao() {
  const sections = await getEquipeGestao();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      {sections.map((section, index: number) => (
        <section key={index} className="space-y-8 md:space-y-14">
          <h1 className="title-1 text-center">{section.title}</h1>
          <UserCard.Wrapper>
            {section.members.map((member, index: number) => (
              <UserCard.Root key={index}>
                <UserCard.Image src={member.image.src} alt={member.image.alt} />
                <div className="flex flex-grow flex-col items-center justify-between gap-4">
                  <h1 className="text-center text-xl font-bold">
                    {member.name}
                  </h1>
                  <h2 className="text-center font-bold">{member.role}</h2>
                  <UserCard.Button href={member.lattesUrl} />
                </div>
              </UserCard.Root>
            ))}
          </UserCard.Wrapper>
        </section>
      ))}
    </main>
  );
}
