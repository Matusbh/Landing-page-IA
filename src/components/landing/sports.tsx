import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import imageData from '@/app/lib/placeholder-images.json'

const sportsLinks = [
  "https://www.google.com/maps/search/?api=1&query=hiking+trails+near+Alcalá+Tenerife",
  "https://www.google.com/maps/search/?api=1&query=cycling+routes+near+Alcalá+Tenerife",
  "https://www.google.com/maps/search/?api=1&query=golf+courses+near+Alcalá+Tenerife",
  "https://www.google.com/maps/search/?api=1&query=surfing+spots+near+Alcalá+Tenerife",
  "https://www.google.com/maps/search/?api=1&query=kayaking+near+Alcalá+Tenerife",
  "https://www.google.com/maps/search/?api=1&query=diving+centers+near+Alcalá+Tenerife"
]

export default function Sports({ dict }: { dict: Dictionary['sports'] }) {
  return (
    <section id="sports" className="bg-accent/10 py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((sport, index) => (
            <Card key={`${sport.title}-${index}`} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image
                  src={imageData.sports[index].src}
                  alt={imageData.sports[index].alt}
                  data-ai-hint={imageData.sports[index].hint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{sport.title}</CardTitle>
                <CardDescription>{sport.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={sportsLinks[index]} target="_blank" rel="noopener noreferrer">
                    {dict.gmaps_button}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
