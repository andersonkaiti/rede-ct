import { getCategoriasPesquisadores } from "@actions/pesquisadores";
import { BackArrow } from "@components/back-arrow";
import * as Tabs from "@components/ui/tabs";

export default async function Pesquisadores() {
  const pesquisadores = await getCategoriasPesquisadores();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <section className="space-y-14">
        <h1 className="title-1 text-center">Pesquisadores da RedeCT</h1>

        <Tabs.Root defaultValue="Pesquisador Sênior">
          <Tabs.List className="w-full">
            {pesquisadores.map(({ type }, index: number) => (
              <Tabs.Trigger key={index} value={type}>
                {type}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {pesquisadores.map(({ members, type }, index: number) =>
            members.map(({ name, info }) => (
              <Tabs.Content key={`${index}-${name}`} value={type}>
                <p className="text-gray-500">
                  <span className="font-bold text-black">{name}</span> {info}
                </p>
              </Tabs.Content>
            )),
          )}
        </Tabs.Root>
      </section>
    </main>
  );
}
