import { UserCardWrapper } from "@components/ui/user-card";
import { getLegitimatingCommittee } from "@services/legitimating-committee";

import { UserCardComponent } from "./user-card";

export async function ComiteLegitimador() {
  const [legitimatingCommittee] = await getLegitimatingCommittee();

  return (
    <UserCardWrapper>
      {legitimatingCommittee?.team_members.map((member, index: number) => (
        <UserCardComponent key={index} member={member} />
      ))}
    </UserCardWrapper>
  );
}
