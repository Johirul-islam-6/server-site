import { z } from 'zod';

// zod even validation
const createEventZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    start_date: z.string({
      required_error: 'event start Date is required',
    }),
    end_date: z.string({
      required_error: 'event End date is required',
    }),
    location: z.string({
      required_error: 'location is required',
    }),
    email: z
      .string({
        required_error: 'user email is required',
      })
      .email(),
  }),
});

export const eventValidation = {
  createEventZodSchema,
};
