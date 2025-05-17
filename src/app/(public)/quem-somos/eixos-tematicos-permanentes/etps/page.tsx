import { BackArrow } from "@components/back-arrow";
import { EPTAccordion } from "./_components/etp-accordion";

export default function EixosTematicosPermanentesETPs() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h2 className="title-1 text-center">
        Eixos Temáticos Permanentes (ETPs)
      </h2>
      <EPTAccordion />
    </main>
  );
}
