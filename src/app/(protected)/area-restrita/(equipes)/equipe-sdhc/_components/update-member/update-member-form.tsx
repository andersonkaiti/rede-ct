import { Button } from "@components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from "@components/ui/page-container";
import { Textarea } from "@components/ui/textarea";
import { Loader2 } from "lucide-react";
import { ITeamMember } from "types/team";

import { ErrorMessage } from "@/app/(protected)/area-restrita/noticias/_components/error-message";

import { SelectMember } from "../../../../_components/select-member";
import { useUpdateMember } from "../../../_hooks/use-update-member";

interface IUpdateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void;
  member: ITeamMember;
}

export function UpdateMemberForm({
  setIsOpen,
  member,
}: IUpdateMemberFormProps) {
  const { state, formAction, isLoading } = useUpdateMember({
    setIsOpen,
    type: "equipe-sdhc",
    user: {
      id: member.id ?? "",
    },
  });

  const hasErrors = state && "errors" in state;

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro da equipe</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <PageForm action={formAction}>
          <PageFormContent>
            <PageFormContentField>
              <Label>{member ? "Membro" : "Usuários"}</Label>

              <SelectMember user_id={member?.user_id} />

              {hasErrors && state.errors.user_id && (
                <ErrorMessage state={state} inputName="user_id" />
              )}
            </PageFormContentField>

            <PageFormContentField>
              <Label>Cargo</Label>

              <Input
                placeholder="Cargo"
                name="role"
                defaultValue={member?.role}
              />

              {hasErrors && state.errors.role && (
                <ErrorMessage state={state} inputName="role" />
              )}
            </PageFormContentField>

            <PageFormContentField>
              <Label>Descrição</Label>

              <Textarea
                placeholder="Descrição"
                name="description"
                defaultValue={member?.description}
              />

              {hasErrors && state.errors.description && (
                <ErrorMessage state={state} inputName="description" />
              )}
            </PageFormContentField>
          </PageFormContent>

          <DialogFooter>
            <Button type="submit">
              {isLoading && <Loader2 className="size-4 animate-spin" />}

              {member ? "Atualizar membro" : "Cadastrar membro"}
            </Button>
          </DialogFooter>
        </PageForm>
      </DialogContent>
    </DialogContent>
  );
}
