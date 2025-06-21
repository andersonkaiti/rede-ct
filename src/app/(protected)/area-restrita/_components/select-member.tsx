import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Loader2 } from "lucide-react";
import { ITeamMember } from "types/team";

import { useUsers } from "../(equipes)/_hooks/use-users.hook";

interface ISelectMemberProps {
  user_id?: ITeamMember["user_id"];
}

export function SelectMember({ user_id }: ISelectMemberProps) {
  const { data: users, isLoading } = useUsers();

  const user = users?.find((user) => user.id === user_id);
  const memberName = `${user?.first_name} ${user?.last_name || ""}`;

  function renderSelectPlaceholder() {
    if (user_id && !isLoading) {
      return memberName;
    }

    if (user_id && isLoading) {
      return (
        <div className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          Carregando...
        </div>
      );
    }

    return "Selecione o membro";
  }

  return (
    <Select name="user_id" defaultValue={user_id}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={renderSelectPlaceholder()} />
      </SelectTrigger>

      {user_id && (
        <SelectContent>
          <SelectItem value={user_id}>{renderSelectPlaceholder()}</SelectItem>
        </SelectContent>
      )}

      {!user_id && (
        <SelectContent>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.first_name} {user.last_name || ""}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </Select>
  );
}
