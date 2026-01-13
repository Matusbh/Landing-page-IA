
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import imageData from '@/app/lib/placeholder-images.json'
import { BOOKING_URL } from '@/lib/constants'
import type { Dictionary } from '@/lib/dictionaries'

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  const { heroBackground } = imageData

  return (
    <section className="relative h-screen w-full">
      <Image
        src={heroBackground.src}
        alt={heroBackground.alt}
        data-ai-hint={heroBackground.hint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Title and Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter">
                {dict.title_line1}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide -mt-2 sm:-mt-4 flex items-center gap-4">
                <span>{dict.title_line2}</span>
                <span className="font-script normal-case text-4xl sm:text-5xl lg:text-6xl">{dict.title_line3}</span>
              </h2>
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="px-10 py-6 text-lg">
                <Link href={BOOKING_URL}>{dict.book_button}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
