import { NavigationCard } from "@components/navigation-card";
import * as Container from "@components/ui/page-container";
import { Award, Banknote, History, Newspaper, Users } from "lucide-react";

export default function AreaRestrita() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Área Restrita</Container.PageTitle>
          <Container.PageDescription>
            Bem-vindo(a) de volta à área restrita do site. Aqui você encontrará
            informações exclusivas e recursos para gerenciar sua conta.
          </Container.PageDescription>
        </Container.PageHeaderContent>
      </Container.PageHeader>
      <Container.PageMain>
        <section className="flex flex-col gap-2">
          <NavigationCard.Root href="/area-restrita/noticias">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-indigo-500/20 p-2">
                <Newspaper className="text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold">Notícias</h3>
            </div>
          </NavigationCard.Root>
          <NavigationCard.Root href="/area-restrita/pendencias">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-500/20 p-2">
                <Banknote className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">Pendências</h3>
            </div>
          </NavigationCard.Root>
          <NavigationCard.Root href="/area-restrita/certificados">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-500/20 p-2">
                <Award className="text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Certificados</h3>
            </div>
          </NavigationCard.Root>
          <NavigationCard.Root href="/area-restrita/historico-de-contribuicoes">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-orange-500/20 p-2">
                <History className="text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold">Histórico</h3>
            </div>
          </NavigationCard.Root>
          <NavigationCard.Root href="/area-restrita/equipes">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-500/20 p-2">
                <Users className="text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold">Equipes</h3>
            </div>
          </NavigationCard.Root>
        </section>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
