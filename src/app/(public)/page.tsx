import { HeroSection } from './_components/home/hero-section'
import { OurPurpose } from './_components/home/our-purpose'

export default function Home() {
  return (
    <>
      <HeroSection />

      <main className="mx-auto flex max-w-7xl flex-col justify-center gap-32 p-4 py-10 lg:p-24">
        <OurPurpose />
      </main>
    </>
  )
}
