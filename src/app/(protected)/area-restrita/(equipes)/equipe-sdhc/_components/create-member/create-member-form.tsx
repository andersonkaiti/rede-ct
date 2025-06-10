import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as Container from "@components/ui/page-container";
import { Textarea } from "@components/ui/textarea";
import { Loader2 } from "lucide-react";
import { ITeamMember } from "types/team";

import { ErrorMessage } from "@/app/(protected)/area-restrita/noticias/_components/error-message";

import { SelectMember } from "../../../_components/select-member";
import { useCreateMember } from "../../../_hooks/use-create-member";

interface ICreateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void;
  member?: ITeamMember;
}

export function CreateMemberForm({
  setIsOpen,
  member,
}: ICreateMemberFormProps) {
  const { state, formAction, isLoading } = useCreateMember({
    setIsOpen,
    name: "Equipe SDHC",
    type: "equipe-sdhc",
  });

  const hasErrors = state && "errors" in state;

  return (
    <Dialog.Content className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <Dialog.Header>
        <Dialog.Title>Selecione o membro da equipe</Dialog.Title>
      </Dialog.Header>

      <Dialog.Content>
        <Container.PageForm action={formAction}>
          <Container.PageFormContent>
            <Container.PageFormContentField>
              <Label>{member ? "Membro" : "Usuários"}</Label>

              <SelectMember user_id={member?.user_id} />

              {hasErrors && state.errors.user_id && (
                <ErrorMessage state={state} inputName="user_id" />
              )}
            </Container.PageFormContentField>

            <Container.PageFormContentField>
              <Label>Cargo</Label>

              <Input
                placeholder="Cargo"
                name="role"
                defaultValue={member?.role}
              />

              {hasErrors && state.errors.role && (
                <ErrorMessage state={state} inputName="role" />
              )}
            </Container.PageFormContentField>

            <Container.PageFormContentField>
              <Label>Descrição</Label>

              <Textarea
                placeholder="Descrição"
                name="description"
                defaultValue={member?.description}
              />

              {hasErrors && state.errors.description && (
                <ErrorMessage state={state} inputName="description" />
              )}
            </Container.PageFormContentField>
          </Container.PageFormContent>

          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancelar</Button>
            </Dialog.Close>
            <Button type="submit">
              {isLoading && <Loader2 className="size-4 animate-spin" />}

              {member ? "Atualizar membro" : "Cadastrar membro"}
            </Button>
          </Dialog.Footer>
        </Container.PageForm>
      </Dialog.Content>
    </Dialog.Content>
  );
}
