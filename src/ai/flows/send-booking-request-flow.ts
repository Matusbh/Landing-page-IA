'use server';
/**
 * @fileOverview Flow to send a booking request email.
 *
 * - sendBookingRequest: A function that processes and sends the booking request.
 * - BookingRequestInput: The input type for the sendBookingRequest function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { format } from 'date-fns';

const BookingRequestSchema = z.object({
  name: z.string().describe('The full name of the person making the request.'),
  email: z.string().email().describe('The email address of the person making the request.'),
  guests: z.number().int().min(1).describe('The number of guests for the stay.'),
  dates: z.object({
    from: z.date().describe('The check-in date.'),
    to: z.date().describe('The check-out date.'),
  }),
});

export type BookingRequestInput = z.infer<typeof BookingRequestSchema>;

export async function sendBookingRequest(input: BookingRequestInput): Promise<void> {
  await bookingRequestFlow(input);
}

// NOTE: This flow only generates the email content. Actually sending the email
// requires an additional tool or service for sending emails, which is not
// implemented here. The generated content is logged to the console for now.
const bookingRequestFlow = ai.defineFlow(
  {
    name: 'bookingRequestFlow',
    inputSchema: BookingRequestSchema,
    outputSchema: z.void(),
  },
  async (request) => {
    const prompt = `
      You are an assistant responsible for creating booking request emails.
      Generate a professional and friendly email to the apartment manager at 'diovista@gmail.com'.

      The email must be in Spanish.

      The subject of the email should be: "Nueva Solicitud de Reserva para DioVista".

      The body of the email must include the following details clearly formatted:
      - Nombre del solicitante: ${request.name}
      - Email de contacto: ${request.email}
      - Número de huéspedes: ${request.guests}
      - Fecha de entrada: ${format(request.dates.from, 'PPP')}
      - Fecha de salida: ${format(request.dates.to, 'PPP')}

      Conclude the email with a polite closing, suggesting the manager reply to the user's email to confirm availability and next steps.
    `;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash',
    });
    
    // In a real application, you would use an email sending service (e.g., SendGrid, Resend)
    // with a Genkit tool to send the generated `output`.
    // For this example, we will just log the generated email to the console.
    console.log("--- Email para enviar ---");
    console.log(output);
    console.log("--- Fin del email ---");

    // This is where you would call your email sending tool.
    // await sendEmailTool({
    //   to: 'diovista@gmail.com',
    //   subject: 'Nueva Solicitud de Reserva para DioVista',
    //   body: output,
    // });
  }
);
