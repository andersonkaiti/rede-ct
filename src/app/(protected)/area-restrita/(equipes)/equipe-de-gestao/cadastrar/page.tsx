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
import { SelectMember } from '../_components/select-member'
import { TeamMembersTable } from '../_components/team-members-table/team-members-table'
import { useCreateTeam } from '../_hooks/use-register-team.hook'

export default function CadastrarEquipeDeGestao() {
  const {
    team,
    inputRef,
    setSelectedMember,
    handleIncludeTeamMember,
    handleRemoveMember,
    formAction,
    isLoading,
    errors,
    payload,
  } = useCreateTeam()

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

              <Input
                defaultValue={payload?.get('name') as string}
                name="name"
                placeholder="Nome"
              />

              {errors?.name && errors?.name && (
                <Alert className="border-red-500 p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors.name}</AlertDescription>
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

              <TeamMembersTable
                handleRemoveMember={handleRemoveMember}
                teamMembers={team}
              />

              {errors?.members && errors.members && (
                <Alert className="border-red-500 p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors.members}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>
          </PageFormContent>

          <Button className="cursor-pointer" disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="size-4 animate-spin" />}
            Cadastrar equipe
          </Button>
        </PageForm>
      </PageMain>
    </PageContainer>
  )
}
