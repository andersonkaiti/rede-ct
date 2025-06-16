import { Badge } from "@components/ui/badge";
import {
  UserCard,
  UserCardButtonLattes,
  UserCardContent,
  UserCardImage,
} from "@components/ui/user-card";
import { ITeamMember } from "types/team";

export function UserCardComponent({ member }: { member: ITeamMember }) {
  return (
    <UserCard>
      <UserCardImage
        src={member.user?.profile_image_url || "/images/placeholder.png"}
        alt={`${member.user?.first_name} ${member.user?.last_name}`}
      />
      <UserCardContent>
        <div className="flex flex-grow flex-col items-center justify-between gap-2">
          <h1 className="text-center text-xl font-bold md:text-3xl">
            {member.user?.first_name} {member.user?.last_name}
          </h1>
          <Badge className="bg-primary/20 text-primary border-primary/20 rounded-full border px-4 py-1 shadow-lg">
            <h2 className="text-center font-bold">{member.role}</h2>
          </Badge>
        </div>

        <UserCardButtonLattes href={member.user?.lattesUrl || ""} />
      </UserCardContent>
    </UserCard>
  );
}
