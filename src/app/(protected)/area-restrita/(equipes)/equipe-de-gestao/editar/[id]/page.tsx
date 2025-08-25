'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageContainer,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import { SelectMember } from '../../_components/select-member'
import { TeamMembersTable } from '../../_components/team-members-table/team-members-table'
import { useUpdateTeam } from '../../_hooks/use-update-team.hook'
import { LoadingInputSkeleton } from './_components/loading-input-skeleton'
import { LoadingTableSkeleton } from './_components/loading-table-skeleton'

export default function EditarEquipeDeGestao() {
  const {
    data,
    team,
    isTeamLoading,
    inputRef,
    setSelectedMember,
    handleIncludeTeamMember,
    handleRemoveMember,
    errors,
    formAction,
    isLoading,
  } = useUpdateTeam()

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Editar Equipe</PageTitle>
      </PageHeader>
      <PageMain>
        <PageForm action={formAction}>
          <PageFormContent>
            <PageFormContentField>
              <Label>Nome da equipe</Label>
              {isTeamLoading ? (
                <LoadingInputSkeleton />
              ) : (
                <Input
                  defaultValue={data?.name}
                  name="name"
                  placeholder="Nome"
                />
              )}

              {errors?.name && errors?.name && (
                <Alert className="border-primary p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors?.name}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>
            <PageFormContentField>
              <Label>Membros cadastrados</Label>

              <SelectMember
                handleIncludeTeamMember={handleIncludeTeamMember}
                inputRef={inputRef}
                setSelectedMember={setSelectedMember}
              />

              {isTeamLoading ? (
                <LoadingTableSkeleton />
              ) : (
                <TeamMembersTable
                  handleRemoveMember={handleRemoveMember}
                  teamMembers={team}
                />
              )}

              {errors?.members && errors?.members && (
                <Alert className="border-primary p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors?.members}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>

            <Button
              className="cursor-pointer"
              disabled={isLoading}
              type="submit"
            >
              {isLoading && <Loader2 className="size-4 animate-spin" />}
              Atualizar equipe
            </Button>
          </PageFormContent>
        </PageForm>
      </PageMain>
    </PageContainer>
  )
}
