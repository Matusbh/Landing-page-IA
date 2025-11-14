import type { Dictionary } from '@/lib/dictionaries'

export default function ValueProposition({ dict }: { dict: Dictionary['valueProposition'] }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-foreground/80">
            <p>{dict.description1}</p>
            <p>{dict.description2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
