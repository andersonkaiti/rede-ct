import { UserCard } from "@components/user-card";

import { getLegitimatingCommittee } from "@/services/legitimating-committee";

export async function ComiteLegitimador() {
  const legitimatingCommittee = await getLegitimatingCommittee();

  return (
    <UserCard.Wrapper>
      {legitimatingCommittee[0]?.team_members.map((member, index: number) => (
        <UserCard.Root key={index}>
          <UserCard.Image
            src={member.user?.profile_image_url ?? ""}
            alt={`${member.user?.first_name} ${member.user?.last_name || ""}`}
          />
          <div className="flex flex-grow flex-col items-center justify-between gap-4">
            <h1 className="text-center text-xl font-bold">
              {member.user?.first_name} {member.user?.last_name ?? ""}
            </h1>
            <h2 className="text-center font-bold">{member.role}</h2>
          </div>
        </UserCard.Root>
      ))}
    </UserCard.Wrapper>
  );
}
