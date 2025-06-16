"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  PageContainer,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";
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
    <PageContainer>
      <PageHeader>
        <PageTitle>Cadastrar Equipe</PageTitle>
      </PageHeader>
      <PageMain>
        <PageForm action={formAction}>
          <PageFormContent>
            <PageFormContentField>
              <Label>Nome da equipe</Label>
              <Input name="name" placeholder="Nome" />

              {hasErrors && state.errors.name && (
                <ErrorMessage state={state} inputName="name" />
              )}
            </PageFormContentField>
            <PageFormContentField>
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
            </PageFormContentField>
          </PageFormContent>

          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar equipe
          </Button>
        </PageForm>
      </PageMain>
    </PageContainer>
  );
}
