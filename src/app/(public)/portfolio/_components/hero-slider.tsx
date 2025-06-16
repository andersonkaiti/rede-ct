"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Conectando Ciência e Sociedade",
    subtitle:
      "Descubra como a RedeCT promove a difusão científica e tecnológica",
    image: "/placeholder.svg?height=500&width=1200",
    cta: "Conheça nosso trabalho",
  },
  {
    id: 2,
    title: "Inovação e Pesquisa",
    subtitle:
      "Explore nossos projetos de pesquisa e desenvolvimento tecnológico",
    image: "/placeholder.svg?height=500&width=1200",
    cta: "Ver projetos",
  },
  {
    id: 3,
    title: "Educação Científica",
    subtitle: "Programas educacionais que transformam conhecimento em ação",
    image: "/placeholder.svg?height=500&width=1200",
    cta: "Saiba mais",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative flex h-full items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl lg:max-w-3xl">
                  <div className="pr-16 text-white lg:pr-20">
                    <h1 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
                      {slide.subtitle}
                    </p>
                    <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 sm:px-8 sm:text-base">
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
        onClick={prevSlide}
        className="group absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 sm:left-4 sm:h-12 sm:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="group absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 sm:right-4 sm:h-12 sm:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-200 sm:h-3 sm:w-3 ${
              index === currentSlide
                ? "scale-110 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
