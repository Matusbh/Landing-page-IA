"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import imageData from "@/app/lib/placeholder-images.json"
import type { Dictionary } from "@/lib/dictionaries"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Gallery({ dict }: { dict: Dictionary['gallery'] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [modalApi, setModalApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!api || !modalApi) return
      api.scrollTo(index)
      if (isMobile) {
        setSelectedIndex(index)
        setOpen(true)
      }
    },
    [api, modalApi, isMobile]
  )
  
  React.useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    if (open && modalApi) {
      modalApi.scrollTo(selectedIndex, true)
    }
  }, [open, selectedIndex, modalApi])

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
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full max-w-4xl transition-transform duration-300 hover:scale-105"
            opts={{ loop: true, align: "start" }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imageData.gallery.map((image, index) => (
                <CarouselItem key={image.id} onClick={() => onThumbClick(index)} className="cursor-pointer">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[16/10] items-center justify-center p-0">
                      <div className="relative h-full w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          data-ai-hint={image.hint}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16 hidden sm:flex" />
            <CarouselNext className="mr-16 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-7xl w-full bg-transparent border-0 p-4">
            <Carousel setApi={setModalApi} opts={{ loop: true, align: "start", startIndex: selectedIndex }}>
                <CarouselContent>
                {imageData.gallery.map((image) => (
                    <CarouselItem key={`modal-${image.id}`}>
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            />
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="-left-14" />
                <CarouselNext className="-right-14" />
            </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  )
}
