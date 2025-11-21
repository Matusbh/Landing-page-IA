import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import imageData from '@/app/lib/placeholder-images.json'
import { BOOKING_URL } from '@/lib/constants'
import type { Dictionary } from '@/lib/dictionaries'

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  const { heroBackground } = imageData
  const collageImages = [
    imageData.explore[1],
    imageData.gallery[3],
    imageData.explore[4],
  ]

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide -mt-2 sm:-mt-4">
                {dict.title_line2}
              </h2>
              <p className="font-script text-4xl sm:text-5xl lg:text-6xl text-accent absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/4 rotate-[-10deg]">
                {dict.title_line3}
              </p>
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="px-10 py-6 text-lg">
                <Link href={BOOKING_URL}>{dict.book_button}</Link>
              </Button>
            </div>
          </div>

          {/* Right side: Image Collage */}
          <div className="hidden md:flex relative w-1/3 h-full items-center justify-center">
            <div
              className="absolute top-1/4 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
              data-ai-hint={collageImages[0].hint}
            >
              <Image
                src={collageImages[0].src}
                alt={collageImages[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
              data-ai-hint={collageImages[1].hint}
            >
              <Image
                src={collageImages[1].src}
                alt={collageImages[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute bottom-1/2 right-1/4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
              data-ai-hint={collageImages[2].hint}
            >
              <Image
                src={collageImages[2].src}
                alt={collageImages[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}