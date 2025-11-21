import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import imageData from '@/app/lib/placeholder-images.json'

const sportsLinks = [
  "https://www.google.com/maps/place/Paseo+Higinia+Mendoza/@28.2027275,-16.8328728,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8d6060b46b9b:0x58931459e533577c!8m2!3d28.2027275!4d-16.8328728!16s%2Fg%2F11nxrzvsr7?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Ika+Ika+Surf+Camp+%26+Surf+School+Tenerife/@28.0608962,-16.7364742,974m/data=!3m3!1e3!4b1!5s0xc6a977af21a73a5:0xd9aa08ae22e3428d!4m6!3m5!1s0xc6a977eae0c0af7:0x597f10b8a79ece5d!8m2!3d28.0608915!4d-16.7338993!16s%2Fg%2F12hks1j25?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Campo+de+golf-+Golf+del+sur/@28.0331893,-16.65917,62339m/data=!3m1!1e3!4m6!3m5!1s0xc6a9f432f98ad6d:0xc78e4ca1299b24d4!8m2!3d28.0340842!4d-16.6094955!16s%2Fm%2F0cm96kz?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/search/tenis+alcala+tenerife/@28.2038753,-16.8285514,973m/data=!3m1!1e3?entry=ttu",
  "https://www.google.com/maps/search/buceo+tenerife+sur/@28.0600251,-16.7575116,7790m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Zona+de+juego+en+arena.+Beach+volley/@28.2023327,-16.832143,122m/data=!3m1!1e3!4m10!1m2!2m1!1svoley+playa+alcala!3m6!1s0xc6a8d8af3671f0b:0x57adfa935c634d78!8m2!3d28.2023327!4d-16.832143!15sChR2b2xleSBwbGF5YSBhbGNhbGHgAQFaFiIUdm9sZXkgcGxheWEgYWxjYWxhkgELYmVhY2hfcGFya2mgAQA!16s%2Fg%2F11q7zdmvyz?entry=ttu"
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
