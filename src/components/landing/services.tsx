import * as React from 'react'
import type { Dictionary } from '@/lib/dictionaries'
import { Wifi, AirVent, ShowerHead, CookingPot, Waves, Sun, WashingMachine, ParkingCircle, Mountain, BedDouble, KeyRound, Bath, ChefHat, Languages, CigaretteOff } from 'lucide-react'

export default function Services({ dict }: { dict: Dictionary['services'] }) {

  const services = [
    { icon: <Wifi />, label: dict.items.wifi },
    { icon: <AirVent />, label: dict.items.ac },
    { icon: <ShowerHead />, label: dict.items.private_bathroom },
    { icon: <Bath />, label: dict.items.two_bathrooms },
    { icon: <CookingPot />, label: dict.items.kitchen },
    { icon: <ChefHat />, label: dict.items.outdoor_kitchen },
    { icon: <Waves />, label: dict.items.sea_view },
    { icon: <Sun />, label: dict.items.terrace },
    { icon: <WashingMachine />, label: dict.items.washing_machine },
    { icon: <ParkingCircle />, label: dict.items.parking },
    { icon: <Mountain />, label: dict.items.mountain_view },
    { icon: <BedDouble />, label: dict.items.bed_linen },
    { icon: <KeyRound />, label: dict.items.contactless_checkin },
    { icon: <Languages />, label: dict.items.multilingual_checkin },
    { icon: <CigaretteOff />, label: dict.items.no_smoking },
  ]

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dict.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            {dict.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((service, index) => (
            <div key={`${service.label}-${index}`} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {React.cloneElement(service.icon, { className: "h-8 w-8" })}
              </div>
              <p className="text-sm font-medium text-center">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
