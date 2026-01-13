import type { Dictionary } from '@/lib/dictionaries'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import imageData from '@/app/lib/placeholder-images.json'

const exploreLinks = [
    "https://www.google.com/maps/place/C.+Garajonay,+10,+38686+Alcal%C3%A1,+Santa+Cruz+de+Tenerife/@28.2025539,-16.8268553,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8ddcf68000bb:0x21a8edaace491a1e!8m2!3d28.2025539!4d-16.8268553!16s%2Fg%2F11c271fkbx?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.com/maps/place/Playa+de+Alcal%C3%A1/@28.2005999,-16.8286297,3890m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8ddd6b8cd8a9:0xf4a84254d27c57ec!8m2!3d28.2006004!4d-16.8286297!16s%2Fg%2F11dftp47xx?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.com/maps/place/C.+Garajonay,+10,+38686+Alcal%C3%A1,+Santa+Cruz+de+Tenerife/@28.2025539,-16.8268553,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8ddcf68000bb:0x21a8edaace491a1e!8m2!3d28.2025539!4d-16.8268553!16s%2Fg%2F11c271fkbx?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.com/maps/place/Playa+M%C3%A9ndez/@28.1996927,-16.8278959,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8ddd6bc05e87:0x7d4e8dcf5d86f161!8m2!3d28.1997504!4d-16.8278396!16s%2Fg%2F11c5qr2mgz?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.es/maps/place/Acantilados+de+Los+Gigantes,+Santa+Cruz+de+Tenerife/@28.2440271,-16.8404998,1944m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8c153fdc6811:0xa0340f674cf6610!8m2!3d28.2408828!4d-16.8377834!16s%2Fm%2F026dqlb?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
]

export default function Explore({ dict }: { dict: Dictionary['explore'] }) {
  return (
    <section id="explore" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 space-y-16">
          {dict.items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-16">
              <div className={`relative h-80 w-full rounded-xl shadow-xl overflow-hidden ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <Image
                  src={imageData.explore[index].src}
                  alt={imageData.explore[index].alt}
                  data-ai-hint={imageData.explore[index].hint}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-foreground/70">{item.description}</p>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href={exploreLinks[index]} target="_blank" rel="noopener noreferrer">
                    {dict.discover_button}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
