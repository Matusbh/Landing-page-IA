import type { Dictionary, Locale } from '@/lib/dictionaries'
import { ContactForm } from './contact-form'

export default function Cta({ dict, lang }: { dict: Dictionary['cta'], lang: Locale }) {
  return (
    <section id="book" className="bg-accent/10 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 text-lg leading-8 text-foreground/80">
            {dict.description}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <ContactForm dict={dict.form} lang={lang} />
        </div>
      </div>
    </section>
  )
}
