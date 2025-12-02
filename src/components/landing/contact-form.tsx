
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { es, enUS, cs, pl } from 'date-fns/locale'
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/hooks/use-toast"
import { sendBookingRequest } from "@/ai/flows/send-booking-request-flow"
import type { Dictionary, Locale } from "@/lib/dictionaries"

const locales: Record<Locale, globalThis.Locale> = {
  es,
  en: enUS,
  pl,
  cs
}

type ContactFormProps = {
  dict: Dictionary['cta']['form']
  lang: Locale
}

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  guests: z.coerce.number().int().min(1, "Debe haber al menos 1 huésped."),
  dates: z.object({
    from: z.date({ required_error: "La fecha de inicio es requerida." }),
    to: z.date({ required_error: "La fecha de fin es requerida." }),
  }),
})

export function ContactForm({ dict, lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: 1,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Convert dates to string before sending
      const requestData = {
        ...values,
        lang,
        dates: {
          from: values.dates.from.toISOString(),
          to: values.dates.to.toISOString(),
        }
      };
      const result = await sendBookingRequest(requestData);

      if (result.success) {
        toast({
          title: dict.success_title,
          description: dict.success_description,
        })
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.error(error)
      toast({
        variant: "destructive",
        title: dict.error_title,
        description: error.message || dict.error_description,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{dict.dates}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value?.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y", { locale: locales[lang] })} -{" "}
                            {format(field.value.to, "LLL dd, y", { locale: locales[lang] })}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y", { locale: locales[lang] })
                        )
                      ) : (
                        <span>{dict.date_placeholder}</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={{ from: field.value?.from, to: field.value?.to }}
                    onSelect={field.onChange as (range: DateRange | undefined) => void}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.name}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.email}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.guests}</FormLabel>
              <FormControl>
                <Input type="number" min="1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : dict.book_button}
        </Button>
      </form>
    </Form>
  )
}
