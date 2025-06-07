import { INewTeamMember } from "@/app/(auth)/area-restrita/(equipes)/equipe-de-gestao/_hooks/use-register-team.hook";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import * as Select from "@components/ui/select";
import { Plus } from "lucide-react";
import { IUser } from "types/user";

export interface ISelectMemberProps {
  users: IUser[] | undefined;
  inputRef: React.RefObject<HTMLInputElement | null>;
  setSelectedMember: React.Dispatch<
    React.SetStateAction<INewTeamMember | null>
  >;
  handleAddMember: () => void;
}

export function SelectMember({
  users,
  inputRef,
  setSelectedMember,
  handleAddMember,
}: ISelectMemberProps) {
  return (
    <header className="flex justify-between gap-2">
      <Select.Root
        onValueChange={(value) => {
          const member = users?.find((member) => member.id === value);

          if (member) {
            const newMember: INewTeamMember = {
              user_id: member.id,
              name: `${member.first_name} ${member?.last_name || ""}`,
              role: inputRef.current?.value || "",
            };

            setSelectedMember(newMember);
          }
        }}
      >
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
