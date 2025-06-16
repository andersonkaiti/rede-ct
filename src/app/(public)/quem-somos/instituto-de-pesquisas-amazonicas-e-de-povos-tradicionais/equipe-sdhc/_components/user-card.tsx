import {
  UserCard as UserCardComponent,
  UserCardImage,
} from "@components/ui/user-card";
import { ITeamMember } from "types/team";

export function UserCard({ member }: { member: ITeamMember }) {
  return (
    <UserCardComponent>
      <UserCardImage
        src={member.user?.image_url as string}
        alt={`${member.user?.first_name} ${member.user?.last_name || ""}`}
      />
      <div className="flex flex-grow flex-col items-center justify-between gap-4">
        <h1 className="text-center text-xl font-bold">
          {member.user?.first_name} {member.user?.last_name || ""}
        </h1>
        <h2 className="text-center font-bold">{member.role}</h2>
      </div>
    </UserCardComponent>
  );
}
