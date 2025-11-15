import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import imageData from '@/app/lib/placeholder-images.json'

const sportsLinks = [
  "https://www.google.com/maps/place/Paseo+Higinia+Mendoza/@28.2027275,-16.8328728,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8d6060b46b9b:0x58931459e533577c!8m2!3d28.2027275!4d-16.8328728!16s%2Fg%2F11nxrzvsr7?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Parque+calistenia+Alcal%C3%A1/@28.2025471,-16.8321232,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8d3208ff53ab:0x4b14f1cb2809acba!8m2!3d28.2025471!4d-16.8321232!16s%2Fg%2F11t6jmkl9j?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Skatepark+Alcal%C3%A1/@28.2024486,-16.8329057,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8d933bdab4d9:0x46f544562d8d12fe!8m2!3d28.2024486!4d-16.8329057!16s%2Fg%2F11p3h9ydjk?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Zona+de+juego+en+arena.+Beach+volley/@28.2021612,-16.8320166,122m/data=!3m1!1e3!4m14!1m7!3m6!1s0xc6a8d3208ff53ab:0x4b14f1cb2809acba!2sParque+calistenia+Alcal%C3%A1!8m2!3d28.2025471!4d-16.8321232!16s%2Fg%2F11t6jmkl9j!3m5!1s0xc6a8d8af3671f0b:0x57adfa935c634d78!8m2!3d28.2023327!4d-16.832143!16s%2Fg%2F11q7zdmvyz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Zona+de+juego+en+arena.+Beach+volley/@28.2021612,-16.8320166,122m/data=!3m1!1e3!4m14!1m7!3m6!1s0xc6a8d3208ff53ab:0x4b14f1cb2809acba!2sParque+calistenia+Alcal%C3%A1!8m2!3d28.2025471!4d-16.8321232!16s%2Fg%2F11t6jmkl9j!3m5!1s0xc6a8d8af3671f0b:0x57adfa935c634d78!8m2!3d28.2023327!4d-16.832143!16s%2Fg%2F11q7zdmvyz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Zona+de+juego+en+arena.+Beach+volley/@28.2022474,-16.8319708,122m/data=!3m1!1e3!4m15!1m8!3m7!1s0xc6a8ddd3dacea59:0x624d2168adb13fa0!2sAlcal%C3%A1,+Santa+Cruz+de+Tenerife!3b1!8m2!3d28.2021526!4d-16.8274248!16s%2Fg%2F1230jtgv!3m5!1s0xc6a8d8af3671f0b:0x57adfa935c634d78!8m2!3d28.2023327!4d-16.832143!16s%2Fg%2F11q7zdmvyz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
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
