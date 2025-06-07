"use client";

import { useRegisterTeam } from "@/app/(auth)/area-restrita/(equipes)/equipe-de-gestao/_hooks/use-register-team.hook";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as Container from "@components/ui/page-container";
import { Loader2 } from "lucide-react";
import { ErrorMessage } from "../../../noticias/_components/error-message";
import { SelectMember } from "./_components/select-member";
import { TeamMembersTable } from "./_components/team-members-table";

export default function CadastrarEquipeDeGestao() {
  const {
    users,
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
        <form action={formAction} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label>Nome da equipe</Label>
              <Input name="name" placeholder="Nome" />

              {hasErrors && state.errors.name && (
                <ErrorMessage state={state} inputName="name" />
              )}
            </div>
            <div className="space-y-2">
              <Label>Membros cadastrados</Label>

              <SelectMember
                users={users}
                inputRef={inputRef}
                setSelectedMember={setSelectedMember}
                handleAddMember={handleAddMember}
              />

              <TeamMembersTable
                team={team}
                handleRemoveMember={handleRemoveMember}
              />

              {hasErrors && state.errors.members && (
                <ErrorMessage state={state} inputName="members" />
              )}
            </div>
          </div>

          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar equipe
          </Button>
        </form>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
