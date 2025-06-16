import { ArrowRight, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export default function PortfolioCard({
  slug,
  title,
  description,
  icon: Icon,
  image,
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden">
          <Image
            src={image || "/images/placeholder.png"}
            alt={title}
            fill
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-gray-700" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-700">
            {title}
          </h3>
          <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
            {description}
          </p>
          <div className="flex items-center text-gray-700 transition-colors group-hover:text-gray-900">
            <span className="font-medium">Explorar seção</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
