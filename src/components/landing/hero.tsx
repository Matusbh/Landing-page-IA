import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { localImages } from '@/lib/local-images'
import { BOOKING_URL } from '@/lib/constants'
import type { Dictionary } from '@/lib/dictionaries'

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative h-[85vh] w-full">
      <Image
        src={localImages.heroBackground}
        alt="Sunset view from the terrace"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {dict.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl">
            {dict.subtitle}
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {dict.book_button}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
