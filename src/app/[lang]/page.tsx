import { getDictionary, Locale } from '@/lib/dictionaries'
import Hero from '@/components/landing/hero'
import ValueProposition from '@/components/landing/value-proposition'
import Gallery from '@/components/landing/gallery'
import Services from '@/components/landing/services'
import Features from '@/components/landing/features'
import Explore from '@/components/landing/explore'
import Restaurants from '@/components/landing/restaurants'
import Sports from '@/components/landing/sports'
import Cta from '@/components/landing/cta'

export default async function LandingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)
  return (
    <main>
      <Hero dict={dict.hero} />
      <ValueProposition dict={dict.valueProposition} />
      <Gallery dict={dict.gallery} />
      <Services dict={dict.services} />
      <Features dict={dict.features} />
      <Explore dict={dict.explore} />
      <Restaurants dict={dict.restaurants} />
      <Sports dict={dict.sports} />
      <Cta dict={dict.cta} lang={lang} />
    </main>
  )
}
