
'use server';
/**
 * @fileOverview Flow to send a booking request email.
 *
 * - sendBookingRequest: A function that processes and sends the booking request.
 * - BookingRequestInput: The input type for the sendBookingRequest function.
 */
import { z } from 'zod';
import { format } from 'date-fns';
import { es, enUS, pl, cs } from 'date-fns/locale';
import type { Locale } from '@/lib/dictionaries';
import { Resend } from 'resend';

const locales: Record<Locale, globalThis.Locale> = {
  es,
  en: enUS,
  pl,
  cs,
};

const emailTemplates: Record<Locale, { subject: string; body: (req: any, f: typeof format) => string }> = {
  es: {
    subject: "Nueva Solicitud de Reserva para DioVista",
    body: (request, f) => `
      Ha recibido una nueva solicitud de reserva.

      Detalles de la solicitud:
      - Nombre del solicitante: ${request.name}
      - Email de contacto: ${request.email}
      - Número de huéspedes: ${request.guests}
      - Fecha de entrada: ${f(new Date(request.dates.from), 'PPP', { locale: locales.es })}
      - Fecha de salida: ${f(new Date(request.dates.to), 'PPP', { locale: locales.es })}

      Por favor, responda directamente al correo del solicitante para confirmar la disponibilidad y los próximos pasos.
    `
  },
  en: {
    subject: "New Booking Request for DioVista",
    body: (request, f) => `
      You have received a new booking request.

      Request details:
      - Requester's name: ${request.name}
      - Contact email: ${request.email}
      - Number of guests: ${request.guests}
      - Check-in date: ${f(new Date(request.dates.from), 'PPP', { locale: locales.en })}
      - Check-out date: ${f(new Date(request.dates.to), 'PPP', { locale: locales.en })}

      Please reply directly to the requester's email to confirm availability and next steps.
    `
  },
  pl: {
    subject: "Nowa prośba o rezerwację dla DioVista",
    body: (request, f) => `
      Otrzymano nową prośbę o rezerwację.

      Szczegóły prośby:
      - Imię i nazwisko osoby zgłaszającej: ${request.name}
      - E-mail kontaktowy: ${request.email}
      - Liczba gości: ${request.guests}
      - Data zameldowania: ${f(new Date(request.dates.from), 'PPP', { locale: locales.pl })}
      - Data wymeldowania: ${f(new Date(request.dates.to), 'PPP', { locale: locales.pl })}

      Proszę odpowiedzieć bezpośrednio na e-mail osoby zgłaszającej, aby potwierdzić dostępność i dalsze kroki.
    `
  },
  cs: {
    subject: "Nová žádost o rezervaci pro DioVista",
    body: (request, f) => `
      Obdrželi jste novou žádost o rezervaci.

      Podrobnosti žádosti:
      - Jméno žadatele: ${request.name}
      - Kontaktní e-mail: ${request.email}
      - Počet hostů: ${request.guests}
      - Datum příjezdu: ${f(new Date(request.dates.from), 'PPP', { locale: locales.cs })}
      - Datum odjezdu: ${f(new Date(request.dates.to), 'PPP', { locale: locales.cs })}

      Odpovězte prosím přímo na e-mail žadatele, abyste potvrdili dostupnost a další kroky.
    `
  }
};

const BookingRequestSchema = z.object({
  name: z.string().describe('The full name of the person making the request.'),
  email: z.string().email().describe('The email address of the person making the request.'),
  guests: z.coerce.number().int().min(1).describe('The number of guests for the stay.'),
  dates: z.object({
    from: z.string().describe('The check-in date.'),
    to: z.string().describe('The check-out date.'),
  }),
  lang: z.enum(['es', 'en', 'pl', 'cs']).describe('The language of the user.'),
});

export type BookingRequestInput = z.infer<typeof BookingRequestSchema>;

export async function sendBookingRequest(input: BookingRequestInput): Promise<{ success: boolean; message: string }> {
  const parsedRequest = BookingRequestSchema.safeParse(input);

  if (!parsedRequest.success) {
    console.error("Invalid booking request input:", parsedRequest.error);
    return {
      success: false,
      message: "Invalid input data.",
    };
  }
  const request = parsedRequest.data;

  if (!process.env.RESEND_API_KEY) {
    const errorMessage = "Resend API key is not configured. Please check your .env file.";
    console.error(errorMessage);
    return {
      success: false,
      message: errorMessage,
    };
  }

  const lang = request.lang || 'es';
  const template = emailTemplates[lang];

  const subject = template.subject;
  const body = template.body(request, format);
  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'noreply@diovista.com',
      to: 'info@diovista.com',
      reply_to: request.email,
      subject: subject,
      text: body,
    });
    
    console.log(`Email sent successfully for booking request from ${request.email}`);
    return {
      success: true,
      message: "Email sent successfully.",
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email.",
    };
  }
}
