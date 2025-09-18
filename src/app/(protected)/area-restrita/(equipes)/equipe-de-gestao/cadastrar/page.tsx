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
import { SelectMember } from '../_components/select-member'
import { TeamMembersTable } from '../_components/team-members-table/team-members-table'
import { useCreateTeam } from './use-register-team.hook'

export default function CadastrarEquipeDeGestao() {
  const {
    form,
    isSubmitting,
    onSubmit,
    serverError,
    members,
    handleIncludeMember,
    handleRemoveMember,
  } = useCreateTeam()

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Cadastrar Equipe</PageTitle>
      </PageHeader>
      <PageMain>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
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

                  <TeamMembersTable
                    handleRemoveMember={handleRemoveMember}
                    teamMembers={members.map((member, index) => ({
                      ...member,
                      id: String(index),
                    }))}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full cursor-pointer"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              Cadastrar equipe
            </Button>
          </form>
        </Form>
      </PageMain>
    </PageContainer>
  )
}
