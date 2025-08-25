'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Conectando Ciência e Sociedade',
    subtitle:
      'Descubra como a RedeCT promove a difusão científica e tecnológica',
    image: '/placeholder.svg?height=500&width=1200',
    cta: 'Conheça nosso trabalho',
  },
  {
    id: 2,
    title: 'Inovação e Pesquisa',
    subtitle:
      'Explore nossos projetos de pesquisa e desenvolvimento tecnológico',
    image: '/placeholder.svg?height=500&width=1200',
    cta: 'Ver projetos',
  },
  {
    id: 3,
    title: 'Educação Científica',
    subtitle: 'Programas educacionais que transformam conhecimento em ação',
    image: '/placeholder.svg?height=500&width=1200',
    cta: 'Saiba mais',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const SLIDE_INTERVAL_MS = 5000

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index: number) => (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          key={slide.id}
        >
          <div
            className="relative h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative flex h-full items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl lg:max-w-3xl">
                  <div className="pr-16 text-white lg:pr-20">
                    <h1 className="mb-4 font-bold text-3xl leading-tight sm:text-4xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-gray-200 text-lg leading-relaxed sm:text-xl lg:text-2xl">
                      {slide.subtitle}
                    </p>
                    <button
                      className="rounded-md bg-background px-6 py-3 font-medium text-gray-900 text-sm transition-colors hover:bg-gray-100 sm:px-8 sm:text-base"
                      type="button"
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* arrows */}
      <button
        aria-label="Previous slide"
        className="group -translate-y-1/2 absolute top-1/2 left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 sm:left-4 sm:h-12 sm:w-12"
        onClick={prevSlide}
        type="button"
      >
        <ChevronLeft className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      </button>
      <button
        aria-label="Next slide"
        className="group -translate-y-1/2 absolute top-1/2 right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 sm:right-4 sm:h-12 sm:w-12"
        onClick={nextSlide}
        type="button"
      >
        <ChevronRight className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      </button>

      {/* dots */}
      <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex space-x-2">
        {slides.map((_, index: number) => (
          <button
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all duration-200 sm:h-3 sm:w-3 ${
              index === currentSlide
                ? 'scale-110 bg-background'
                : 'bg-background/50 hover:bg-background/75'
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}
