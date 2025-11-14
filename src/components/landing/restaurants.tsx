import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UtensilsCrossed } from 'lucide-react'

const restaurantLinks = [
  "https://www.google.com/maps/search/?api=1&query=Restaurante+Saúco+Alcalá",
  "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Pescador+Alcalá",
  "https://www.google.com/maps/search/?api=1&query=Lupulo+Esencia+Alcalá"
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
            <Card key={restaurant.name} className="flex flex-col text-center transition-shadow duration-300 hover:shadow-xl">
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
