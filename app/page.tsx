import { ContactSection } from '@/components/contact-section'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TreatmentSection } from '@/components/treatment-section'
import { treatmentCategories } from '@/lib/treatments'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        {treatmentCategories.map((category, index) => (
          <TreatmentSection key={category.id} category={category} index={index} />
        ))}
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
