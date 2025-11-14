"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import imageData from "@/app/lib/placeholder-images.json"
import type { Dictionary } from "@/lib/dictionaries"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

export default function Gallery({ dict }: { dict: Dictionary['gallery'] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full max-w-4xl" 
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imageData.gallery.map((image) => (
                <CarouselItem key={image.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[16/10] items-center justify-center p-0">
                       <div className="relative h-full w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          data-ai-hint={image.hint}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16"/>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
