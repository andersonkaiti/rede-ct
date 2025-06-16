import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function HeroSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-red-700 p-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-white transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> Voltar ao Portfólio
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="text-xl leading-relaxed text-white">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
