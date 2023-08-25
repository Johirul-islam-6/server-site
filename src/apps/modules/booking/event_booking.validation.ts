import { z } from 'zod';

// create a User zod validation
const evenBookingZodSchema = z.object({
  body: z.object({
    userEmail: z.string({
      required_error: 'email is required',
    }),
    eventId: z
      .string({
        required_error: 'Event Id is required',
      })
      .optional(),
    bookingDate: z.string({
      required_error: 'Booking Date  is required',
    }),
    bookingTime: z.string({
      required_error: 'Booking Time slot is required',
    }),
  }),
});

export const EventBookingValidation = {
  evenBookingZodSchema,
};
