import { Badge } from "@components/ui/badge";
import { UserCard, UserCardImage } from "@components/ui/user-card";
import { ITeamMember } from "types/team";

export function UserCardComponent({ member }: { member: ITeamMember }) {
  return (
    <UserCard>
      <UserCardImage
        src={member.user?.profile_image_url ?? ""}
        alt={`${member.user?.first_name} ${member.user?.last_name || ""}`}
      />
      <div className="flex flex-grow flex-col items-center justify-between gap-2">
        <h1 className="text-center text-xl font-semibold">
          {member.user?.first_name} {member.user?.last_name ?? ""}
        </h1>
        <Badge className="bg-primary rounded-full px-4 py-1 text-white shadow-lg">
          <h2 className="text-center font-bold">{member.role}</h2>
        </Badge>
        <div className="bg-primary/20 rounded-lg px-4 py-2 text-center text-sm">
          {member.description}
        </div>
      </div>
    </UserCard>
  );
}
