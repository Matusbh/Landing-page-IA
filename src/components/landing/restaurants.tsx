import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UtensilsCrossed } from 'lucide-react'

const restaurantLinks = [
  "https://www.google.com/maps/search/?api=1&query=Restaurante+Saúco+Alcalá",
  "https://www.google.com/maps/place/Cafeter%C3%ADa+Alcal%C3%A1+Center/@28.2015542,-16.8300292,486m/data=!3m1!1e3!4m10!1m2!2m1!1scafeter%C3%ADa+cerca+de+Centeno,+Alcal%C3%A1!3m6!1s0xc6a8dc048a67cd3:0xa5bbae4a39590125!8m2!3d28.2010801!4d-16.8262301!15sCiRjYWZldGVyw61hIGNlcmNhIGRlIENlbnRlbm8sIEFsY2Fsw6FaJSIjY2FmZXRlcsOtYSBjZXJjYSBkZSBjZW50ZW5vIGFsY2Fsw6GSAQRjYWZlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJ3YTFCNVIwMUJFQUXgAQD6AQQIABA9!16s%2Fg%2F11t426tk53?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/place/Restaurante+Muelle+Viejo/@28.2014956,-16.8347091,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0xc6a8de65d576da5:0xd307221072a7140d!8m2!3d28.201491!4d-16.8298382!16s%2Fg%2F11g2_z64j6?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
]

export default function Restaurants({ dict }: { dict: Dictionary['restaurants'] }) {
  return (
    <section id="restaurants" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {dict.items.map((restaurant, index) => (
            <Card key={`${restaurant.name}-${index}`} className="flex flex-col text-center transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="pt-4">{restaurant.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="justify-center">
                <Button asChild>
                  <Link href={restaurantLinks[index]} target="_blank" rel="noopener noreferrer">
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
