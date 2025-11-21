
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
  DialogTitle,
} from "@/components/ui/dialog"
import imageData from "@/app/lib/placeholder-images.json"
import type { Dictionary } from "@/lib/dictionaries"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
      if (!api || !isMobile) return
      setSelectedIndex(index)
      setOpen(true)
    },
    [api, isMobile]
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
            className="w-full max-w-4xl transition-transform duration-300 md:hover:scale-105"
            opts={{ loop: true, align: "start" }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imageData.gallery.map((image, index) => (
                <CarouselItem key={image.id} onClick={() => onThumbClick(index)} className={cn(isMobile ? "cursor-pointer" : "")}>
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
        <DialogContent className="max-w-none w-screen h-screen sm:max-w-7xl sm:h-auto sm:w-full bg-black/80 border-0 p-0 flex items-center justify-center">
            <DialogTitle className="sr-only">Image Gallery</DialogTitle>
            <Carousel 
                setApi={setModalApi} 
                opts={{ loop: true, align: "start", startIndex: selectedIndex }}
                className="w-full h-full"
            >
                <CarouselContent className="h-full">
                {imageData.gallery.map((image) => (
                    <CarouselItem key={`modal-${image.id}`} className="flex items-center justify-center h-full">
                        <div className="relative w-full h-full max-h-[80vh] aspect-[16/10]">
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
                <CarouselPrevious className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
            <Button
              variant="ghost"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 bg-white/80 text-foreground opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20 h-10 w-10"
            >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
