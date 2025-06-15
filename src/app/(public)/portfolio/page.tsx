import type { Metadata } from "next";
import HeroSlider from "@/components/hero-slider";
import CallToAction from "@/components/call-to-action";
import PortfolioCard from "@/components/portfolio-card";
import { Scale, Users, TreePine, Network, Building2, Star, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio - RedeCT",
  description: "Conheça os projetos e iniciativas da Rede de Ciência e Tecnologia (RedeCT)",
  keywords: "RedeCT, portfólio, ciência, tecnologia, pesquisa, inovação",
};

const portfolioItems = [
  {
    slug: "legislacoes-mapas",
    title: "Legislações & Mapas",
    description:
      "Compilação de marcos legais e mapeamentos territoriais relacionados à ciência e tecnologia no Brasil.",
    icon: Scale,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "povos-originarios",
    title: "Povos Originários",
    description: "Documentação e valorização dos conhecimentos tradicionais dos povos indígenas brasileiros.",
    icon: TreePine,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "comunidades-tradicionais",
    title: "Comunidades Tradicionais",
    description:
      "Registro das práticas e saberes de comunidades quilombolas, ribeirinhas e outras populações tradicionais.",
    icon: Users,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "grupos-pesquisa",
    title: "Grupos de Pesquisa, Redes & Coletivos",
    description: "Mapeamento de grupos de pesquisa, redes colaborativas e coletivos científicos ativos no país.",
    icon: Network,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "museus-espacos",
    title: "Museus & Espaços Museológicos",
    description: "Catálogo de museus de ciência, centros de divulgação científica e espaços de educação não formal.",
    icon: Building2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "destaques-redect",
    title: "Destaques RedeCT",
    description: "Principais projetos, conquistas e marcos da Rede de Ciência e Tecnologia.",
    icon: Star,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "centro-referencia-unesp",
    title: "Centro de Referência UNESP",
    description: "Recursos, acervos e serviços oferecidos pelo Centro de Referência da UNESP.",
    icon: GraduationCap,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">

      <HeroSlider />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Portfólio RedeCT</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore nossos projetos e iniciativas que conectam ciência, tecnologia e sociedade. Cada seção representa
              um pilar fundamental do nosso trabalho de difusão científica e inovação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />

    </div>
  );
}
