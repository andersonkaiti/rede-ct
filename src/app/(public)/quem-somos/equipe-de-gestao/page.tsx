import { UserCard } from "@components/user-card";
import { getTeams } from "@services/teams/teams";
import { ITeam } from "types/team";

export default async function EquipeDeGestao() {
  const teamsSections = await getTeams<ITeam[]>("equipe-de-gestao");

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      {teamsSections.map((teamSection, index: number) => (
        <section key={index} className="space-y-8 md:space-y-14">
          <h1 className="title-2 text-center">{teamSection.name}</h1>
          <UserCard.Wrapper>
            {teamSection.team_members.map((member, index: number) => (
              <UserCard.Root key={index}>
                <UserCard.Image
                  src={
                    member.user?.profile_image_url || "/images/placeholder.png"
                  }
                  alt={`${member.user?.first_name} ${member.user?.last_name}`}
                />
                <div className="flex flex-grow flex-col items-center justify-between gap-4">
                  <h1 className="text-center text-xl font-bold">
                    {member.user?.first_name} {member.user?.last_name}
                  </h1>
                  <h2 className="text-center font-bold">{member.role}</h2>
                  <UserCard.Button href={member.user?.lattesUrl || ""} />
                </div>
              </UserCard.Root>
            ))}
          </UserCard.Wrapper>
        </section>
      ))}
    </main>
  );
}
