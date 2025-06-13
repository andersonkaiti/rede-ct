import * as Select from "@components/ui/select";
import { Loader2 } from "lucide-react";
import { ITeamMember } from "types/team";

import { useUsers } from "../_hooks/use-users.hook";

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
    <Select.Root name="user_id" defaultValue={user_id}>
      <Select.Trigger className="w-full">
        <Select.Value placeholder={renderSelectPlaceholder()} />
      </Select.Trigger>

      {user_id && (
        <Select.Content>
          <Select.Item value={user_id}>{renderSelectPlaceholder()}</Select.Item>
        </Select.Content>
      )}

      {!user_id && (
        <Select.Content>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.first_name} {user.last_name || ""}
            </Select.Item>
          ))}
        </Select.Content>
      )}
    </Select.Root>
  );
}
