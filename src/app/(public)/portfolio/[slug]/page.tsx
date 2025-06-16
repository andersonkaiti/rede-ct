import { ArrowLeft, Calendar, ExternalLink, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { portfolioData } from "./_constants/portfolio-data";

interface IProps {
  params: { slug: string };
}

type PortfolioKey = keyof typeof portfolioData;

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const data = portfolioData[params.slug as PortfolioKey];
  if (!data) {
    return { title: "Página não encontrada - RedeCT" };
  }
  return {
    title: `${data.title} - Portfólio RedeCT`,
    description: data.description,
  };
}

export default function PortfolioDetailPage({ params }: IProps) {
  const { title, description, content } =
    portfolioData[params.slug as PortfolioKey];

  if (!title) {
    notFound();
  }

  return (
    <>
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-gray-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Portfólio
            </Link>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
              <p className="text-xl leading-relaxed text-gray-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {item.description}
                </p>
                <div className="mb-4 flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="mr-4">
                    {new Date(item.date).toLocaleDateString("pt-BR")}
                  </span>
                  <User className="mr-2 h-4 w-4" />
                  <span>{item.author}</span>
                </div>
                <Link
                  href={item.link}
                  className="inline-flex items-center font-medium text-gray-900 transition-colors hover:text-gray-700"
                >
                  Saiba mais <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
