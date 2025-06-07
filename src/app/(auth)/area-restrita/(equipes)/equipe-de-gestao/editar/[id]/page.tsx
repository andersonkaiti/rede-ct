"use client";

import { ErrorMessage } from "@/app/(auth)/area-restrita/noticias/_components/error-message";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as Container from "@components/ui/page-container";
import { Loader2 } from "lucide-react";
import { useUpdateTeam } from "../../_hooks/use-update-team.hook";
import { LoadingInputSkeleton } from "./_components/loading-input-skeleton";
import { LoadingTableSkeleton } from "./_components/loading-table-skeleton";
import { MembersTable } from "./_components/members-table";
import { SelectMember } from "./_components/select-member";

export default function EditarEquipeDeGestao() {
  const {
    users,
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
        <form action={formAction} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
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
            </div>
            <div className="space-y-2">
              <Label>Membros cadastrados</Label>

              <SelectMember
                users={users}
                inputRef={inputRef}
                setSelectedMember={setSelectedMember}
                handleAddMember={handleAddMember}
              />

              {!isTeamLoading ? (
                <MembersTable
                  team={team}
                  handleRemoveMember={handleRemoveMember}
                />
              ) : (
                <LoadingTableSkeleton />
              )}

              {hasErrors && state.errors.members && (
                <ErrorMessage state={state} inputName="members" />
              )}
            </div>
          </div>

          <Button type="submit" className="cursor-pointer" disabled={isLoading}>
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Atualizar equipe
          </Button>
        </form>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
