"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as Container from "@components/ui/page-container";
import { Loader2 } from "lucide-react";

import { ErrorMessage } from "@/app/(protected)/area-restrita/noticias/_components/error-message";

import { SelectMember } from "../../_components/select-member";
import { TeamMembersTable } from "../../_components/team-members-table";
import { useUpdateTeam } from "../../_hooks/use-update-team.hook";
import { LoadingInputSkeleton } from "./_components/loading-input-skeleton";
import { LoadingTableSkeleton } from "./_components/loading-table-skeleton";

export default function EditarEquipeDeGestao() {
  const {
    team,
    isTeamLoading,
    inputRef,
    setSelectedMember,
    handleAddMember,
    handleRemoveMember,
    state,
    formAction,
    isLoading,
  } = useUpdateTeam();

  const hasErrors = state && "errors" in state;

  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Editar Equipe</Container.PageTitle>
      </Container.PageHeader>
      <Container.PageMain>
        <Container.PageForm action={formAction}>
          <Container.PageFormContent>
            <Container.PageFormContentField>
              <Label>Nome da equipe</Label>
              {!isTeamLoading ? (
                <Input
                  name="name"
                  placeholder="Nome"
                  defaultValue={team?.name}
                />
              ) : (
                <LoadingInputSkeleton />
              )}

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

              {!isTeamLoading ? (
                <TeamMembersTable
                  teamMembers={team.team_members}
                  handleRemoveMember={handleRemoveMember}
                />
              ) : (
                <LoadingTableSkeleton />
              )}

              {hasErrors && state.errors.members && (
                <ErrorMessage state={state} inputName="members" />
              )}
            </Container.PageFormContentField>

            <Button
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="size-4 animate-spin" />}
              Atualizar equipe
            </Button>
          </Container.PageFormContent>
        </Container.PageForm>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
