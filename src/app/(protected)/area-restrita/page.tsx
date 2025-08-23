import { NavigationCard } from '@components/ui/navigation-card'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Award, Banknote, History, Newspaper, Users } from 'lucide-react'

export default function AreaRestrita() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Área Restrita</PageTitle>
          <PageDescription>
            Bem-vindo(a) de volta à área restrita do site. Aqui você encontrará
            informações exclusivas e recursos para gerenciar sua conta.
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageMain>
        <section className="flex flex-col gap-2">
          <NavigationCard href="/area-restrita/noticias">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-indigo-500/20 p-2">
                <Newspaper className="text-indigo-500" />
              </div>
              <h3 className="font-semibold text-lg">Notícias</h3>
            </div>
          </NavigationCard>
          <NavigationCard href="/area-restrita/pendencias">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-500/20 p-2">
                <Banknote className="text-red-500" />
              </div>
              <h3 className="font-semibold text-lg">Pendências</h3>
            </div>
          </NavigationCard>
          <NavigationCard href="/area-restrita/certificados">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-500/20 p-2">
                <Award className="text-green-500" />
              </div>
              <h3 className="font-semibold text-lg">Certificados</h3>
            </div>
          </NavigationCard>
          <NavigationCard href="/area-restrita/historico-de-contribuicoes">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-orange-500/20 p-2">
                <History className="text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg">Histórico</h3>
            </div>
          </NavigationCard>
          <NavigationCard href="/area-restrita/equipes">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-500/20 p-2">
                <Users className="text-purple-500" />
              </div>
              <h3 className="font-semibold text-lg">Equipes</h3>
            </div>
          </NavigationCard>
        </section>
      </PageMain>
    </PageContainer>
  )
}
