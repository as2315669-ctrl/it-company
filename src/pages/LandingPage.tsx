import { Seo } from '../components/Seo'
import { Reveal } from '../components/ui/Reveal'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
import { TechStack } from '../components/sections/TechStack'
import { TrustBar } from '../components/sections/TrustBar'
import { Testimonial } from '../components/sections/Testimonial'
import { CtaSection } from '../components/sections/CtaSection'

/** Single-page marketing site; add routes in `App.tsx` when you add more pages. */
export function LandingPage() {
  return (
    <>
      <Seo />
      <Header />
      <main id="main-content">
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal delayMs={40}>
          <Process />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal delayMs={40}>
          <TrustBar />
        </Reveal>
        <Reveal delayMs={40}>
          <Testimonial />
        </Reveal>
        <Reveal>
          <CtaSection />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  )
}
