import { ArrowRight, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface PortfolioCardProps {
  slug: string
  title: string
  description: string
  icon: LucideIcon
}

export default function PortfolioCard({
  slug,
  title,
  description,
  icon: Icon,
}: PortfolioCardProps) {
  return (
    <Link className="flex items-stretch" href={`/portfolio/${slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden">
          <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
            <Icon className="size-6 text-gray-700" />
          </div>
        </div>
        <div className="flex h-full flex-col p-6">
          <h3 className="mb-3 line-clamp-2 font-bold text-gray-900 text-xl transition-colors group-hover:text-gray-700">
            {title}
          </h3>
          <div className="mt-auto">
            <p className="mb-4 line-clamp-3 text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center text-gray-700 transition-colors group-hover:text-gray-900">
              <span className="font-medium">Explorar seção</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
