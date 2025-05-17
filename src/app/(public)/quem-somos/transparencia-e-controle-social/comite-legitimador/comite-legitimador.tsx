import { getLegitimatingCommittee } from "@actions/legitimating-committee";
import { UserCard } from "@components/user-card";

export async function ComiteLegitimador() {
  const legitimatingCommittee = await getLegitimatingCommittee();

  return (
    <UserCard.Wrapper>
      {legitimatingCommittee.map((member, index: number) => (
        <UserCard.Root key={index}>
          <UserCard.Image src={member.image.src} alt={member.image.alt} />
          <div className="flex flex-grow flex-col items-center justify-between gap-4">
            <h1 className="text-center text-xl font-bold">{member.name}</h1>
            <h2 className="text-center font-bold">{member.role}</h2>
          </div>
        </UserCard.Root>
      ))}
    </UserCard.Wrapper>
  );
}
