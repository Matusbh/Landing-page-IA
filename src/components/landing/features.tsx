import type { Dictionary } from '@/lib/dictionaries'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sunrise, MapPin, Mountain, Sofa } from 'lucide-react'

const icons = [
  <Sunrise key="sunrise" className="h-8 w-8 text-primary" />,
  <MapPin key="map-pin" className="h-8 w-8 text-primary" />,
  <Mountain key="mountain" className="h-8 w-8 text-primary" />,
  <Sofa key="sofa" className="h-8 w-8 text-primary" />
]

export default function Features({ dict }: { dict: Dictionary['features'] }) {
  return (
    <section id="features" className="bg-accent/10 py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((feature, index) => (
            <Card key={`${feature.title}-${index}`} className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {icons[index]}
                </div>
                <CardTitle className="pt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
