import type { Dictionary } from '@/lib/dictionaries'
import { Button } from "@/components/ui/button"
import { BOOKING_URL } from '@/lib/constants'
import Link from 'next/link'

export default function Cta({ dict }: { dict: Dictionary['cta'] }) {
  return (
    <section className="bg-accent/10 py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {dict.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
          {dict.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {dict.book_button}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
