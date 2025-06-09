import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import * as Select from "@components/ui/select";
import { Plus } from "lucide-react";
import { ITeamMember } from "types/team";

import { useUsers } from "../../_hooks/use-users.hook";

interface ISelectMemberProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  setSelectedMember: React.Dispatch<React.SetStateAction<ITeamMember | null>>;
  handleAddMember: () => void;
}

export function SelectMember({
  inputRef,
  setSelectedMember,
  handleAddMember,
}: ISelectMemberProps) {
  const { data: users } = useUsers();

  function handleSelectMember(value: string) {
    const member = users?.find((user) => user.id === value);

    if (member) {
      const newMember: ITeamMember = {
        user_id: member.id,
        role: inputRef.current?.value || "",
        user: member,
      };

      setSelectedMember(newMember);
    }
  }

  return (
    <header className="flex justify-between gap-2">
      <Select.Root onValueChange={handleSelectMember}>
        <Select.Trigger className="flex-1">
          <Select.Value placeholder="Selecione o membro" />
        </Select.Trigger>
        <Select.Content>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Input
        type="text"
        placeholder="Cargo"
        name="role"
        className="flex-1"
        ref={inputRef}
      />

      <Button
        className="cursor-pointer"
        onClick={handleAddMember}
        type="button"
      >
        <Plus />
        Adicionar
      </Button>
    </header>
  );
}
