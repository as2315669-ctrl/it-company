import { Seo } from '../components/Seo'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
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
        <Services />
        <Process />
        <TrustBar />
        <Testimonial />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
