import { IParceria } from "@/types/parceria";
import { getParcerias } from "@actions/parcerias";
import { Parceria } from "@components/parceria";
import { Building2, Calendar, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ParceirosEFinanciadores() {
  const parcerias = await getParcerias();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-10 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          PARCERIAS INSTITUCIONAIS E FINANCIAMENTOS
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>
      <section className="space-y-14">
        {parcerias.map((parceira: IParceria, index: number) => (
          <Parceria key={index} parceria={parceira} />
        ))}
      </section>
      <section className="space-y-6 rounded-md bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-10 text-white md:p-10">
        <h2 className="title-3 flex items-center gap-2">
          <Handshake />
          Interessado em ser um parceiro?
        </h2>
        <p>
          Entre em contato conosco para saber mais sobre como podemos colaborar
          para o sucesso da RedeCT.
        </p>
        <Link
          href="/contato"
          className="rounded-md bg-white px-4 py-3 font-bold text-indigo-500"
        >
          Entre em contato
        </Link>
      </section>
    </main>
  );
}
