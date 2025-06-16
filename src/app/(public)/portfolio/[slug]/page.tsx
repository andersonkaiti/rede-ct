import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CardComponent } from "./_components/card";
import { HeroSection } from "./_components/hero-section";
import { portfolioData } from "./_constants/portfolio-data";

interface IProps {
  params: Promise<{
    slug: string;
  }>;
}

type PortfolioKey = keyof typeof portfolioData;

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = await params;

  const data = portfolioData[slug as PortfolioKey];

  if (!data) {
    return {
      title: "Página não encontrada - RedeCT",
      description: "Página não encontrada",
    };
  }
  return {
    title: `${data.title} - Portfólio RedeCT`,
    description: data.description,
  };
}

export default async function PortfolioDetailPage({ params }: IProps) {
  const { slug } = await params;

  const { title, description, content } = portfolioData[slug as PortfolioKey];

  if (!title) {
    notFound();
  }

  return (
    <>
      <HeroSection title={title} description={description} />
      <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
