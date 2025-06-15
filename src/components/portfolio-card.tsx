import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export default function PortfolioCard({ slug, title, description, icon: Icon, image }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{description}</p>
          <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
            <span className="font-medium">Explorar seção</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
