import { MissaoValoresTabs } from "@components/missao-valores-tabs/missao-valores-tabs";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <h1 className="title-1 text-center">
        Missão, valores, objetivos e grandes desafios da RedeCT
      </h1>
      <MissaoValoresTabs />
    </main>
  );
}
