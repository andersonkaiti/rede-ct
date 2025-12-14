'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AlertCircle, Loader2 } from 'lucide-react'
import { SelectMember } from '../../_components/select-member'
import { TeamMembersTable } from '../../_components/table/team-members-table'
import { LoadingInputSkeleton } from './_components/loading-input-skeleton'
import { LoadingTableSkeleton } from './_components/loading-table-skeleton'
import { useUpdateTeam } from './use-update-team.hook'

export default function EditManagementTeam() {
  const {
    form,
    handleIncludeMember,
    handleRemoveMember,
    members,
    isTeamLoading,
    submit,
    serverError,
  } = useUpdateTeam()

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Editar Equipe</PageTitle>
      </PageHeader>
      <PageMain>
        <Form {...form}>
          <form className="space-y-6" onSubmit={submit}>
            {serverError && (
              <Alert className="mb-4 border-primary" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{serverError}</AlertDescription>
              </Alert>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da equipe</FormLabel>

                  {isTeamLoading && <LoadingInputSkeleton />}

                  {!isTeamLoading && (
                    <FormControl>
                      <Input {...field} placeholder="Nome" />
                    </FormControl>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="members"
              render={() => (
                <FormItem>
                  <FormLabel>Membros cadastrados</FormLabel>
                  <FormControl>
                    <SelectMember handleIncludeMember={handleIncludeMember} />
                  </FormControl>

                  {isTeamLoading && <LoadingTableSkeleton />}

                  {!isTeamLoading && (
                    <TeamMembersTable
                      handleRemoveMember={handleRemoveMember}
                      teamMembers={members}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full cursor-pointer"
              disabled={form.formState.isSubmitting}
              type="submit"
              variant="outline"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="size-4 animate-spin" />
              )}
              Atualizar equipe
            </Button>
          </form>
        </Form>
      </PageMain>
    </PageContainer>
  )
}
