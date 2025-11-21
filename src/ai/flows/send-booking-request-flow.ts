
'use server';
/**
 * @fileOverview Flow to send a booking request email.
 *
 * - sendBookingRequest: A function that processes and sends the booking request.
 * - BookingRequestInput: The input type for the sendBookingRequest function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { format } from 'date-fns';

const BookingRequestSchema = z.object({
  name: z.string().describe('The full name of the person making the request.'),
  email: z.string().email().describe('The email address of the person making the request.'),
  guests: z.coerce.number().int().min(1).describe('The number of guests for the stay.'),
  dates: z.object({
    from: z.string().describe('The check-in date.'),
    to: z.string().describe('The check-out date.'),
  }),
});

export type BookingRequestInput = z.infer<typeof BookingRequestSchema>;

export async function sendBookingRequest(input: BookingRequestInput): Promise<string> {
  return await bookingRequestFlow(input);
}

// NOTE: This flow only generates the email content. Actually sending the email
// requires an additional tool or service for sending emails, which is not
// implemented here. The generated content is returned for logging.
const bookingRequestFlow = ai.defineFlow(
  {
    name: 'bookingRequestFlow',
    inputSchema: BookingRequestSchema,
    outputSchema: z.string(),
  },
  async (request) => {
    // Generate the email content directly without calling the AI model.
    const subject = "Nueva Solicitud de Reserva para DioVista";
    const body = `
      Ha recibido una nueva solicitud de reserva.

      Detalles de la solicitud:
      - Nombre del solicitante: ${request.name}
      - Email de contacto: ${request.email}
      - Número de huéspedes: ${request.guests}
      - Fecha de entrada: ${format(new Date(request.dates.from), 'PPP', { locale: (await import('date-fns/locale/es')).es })}
      - Fecha de salida: ${format(new Date(request.dates.to), 'PPP', { locale: (await import('date-fns/locale/es')).es })}

      Por favor, responda directamente al correo del solicitante para confirmar la disponibilidad y los próximos pasos.
    `;
    
    const emailContent = `Subject: ${subject}\n\n${body}`;

    console.log("--- Email para enviar a matusbehun03@gmial.com ---");
    console.log(emailContent);
    console.log("--- Fin del email ---");

    return emailContent;
  }
);
