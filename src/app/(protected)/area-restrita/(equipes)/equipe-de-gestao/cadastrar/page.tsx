"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as Container from "@components/ui/page-container";
import { Loader2 } from "lucide-react";

import { ErrorMessage } from "../../../noticias/_components/error-message";
import { SelectMember } from "../_components/select-member";
import { TeamMembersTable } from "../_components/team-members-table";
import { useRegisterTeam } from "../_hooks/use-register-team.hook";

export default function CadastrarEquipeDeGestao() {
  const {
    team,
    inputRef,
    setSelectedMember,
    handleAddMember,
    handleRemoveMember,
    formAction,
    isLoading,
    state,
  } = useRegisterTeam();

  const hasErrors = state && "errors" in state;

  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Cadastrar Equipe</Container.PageTitle>
      </Container.PageHeader>
      <Container.PageMain>
        <Container.PageForm action={formAction}>
          <Container.PageFormContent>
            <Container.PageFormContentField>
              <Label>Nome da equipe</Label>
              <Input name="name" placeholder="Nome" />

              {hasErrors && state.errors.name && (
                <ErrorMessage state={state} inputName="name" />
              )}
            </Container.PageFormContentField>
            <Container.PageFormContentField>
              <Label>Membros cadastrados</Label>

              <SelectMember
                inputRef={inputRef}
                setSelectedMember={setSelectedMember}
                handleAddMember={handleAddMember}
              />

              <TeamMembersTable
                teamMembers={team}
                handleRemoveMember={handleRemoveMember}
              />

              {hasErrors && state.errors.members && (
                <ErrorMessage state={state} inputName="members" />
              )}
            </Container.PageFormContentField>
          </Container.PageFormContent>

          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar equipe
          </Button>
        </Container.PageForm>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
