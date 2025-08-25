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
    <Link
      aria-label={`Explorar seção: ${title}`}
      className="group flex items-stretch rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/60"
      href={`/portfolio/${slug}`}
      tabIndex={0}
    >
      <article className="flex flex-1 flex-col overflow-hidden rounded-lg bg-background transition-colors duration-300 hover:bg-accent/40">
        <div className="relative flex-shrink-0">
          <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-background/90 shadow backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/10">
            <Icon className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
          </div>
          {/* Decorative background shape */}
          <div
            aria-hidden="true"
            className="-right-8 -top-8 pointer-events-none absolute h-24 w-24 rounded-full bg-primary/10 opacity-60 blur-2xl transition-all duration-300 group-hover:opacity-80"
          />
        </div>
        <div className="flex h-full flex-col p-6 pt-20">
          <h3 className="mb-3 line-clamp-2 font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-auto">
            <p className="mb-4 line-clamp-3 text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-2 text-secondary-foreground transition-colors duration-300 group-hover:text-primary">
              <span className="font-medium">Explorar seção</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
