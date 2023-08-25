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
    image: z.string({
      required_error: 'image is required',
    }),
    cetagory: z.string({
      required_error: 'cetagory is required',
    }),
    email: z
      .string({
        required_error: 'user email is required',
      })
      .email(),
  }),
});
// Edite zod even validation
const EditeEventZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'title is required',
      })
      .optional(),
    description: z
      .string({
        required_error: 'description is required',
      })
      .optional(),
    start_date: z
      .string({
        required_error: 'event start Date is required',
      })
      .optional(),
    end_date: z
      .string({
        required_error: 'event End date is required',
      })
      .optional(),
    location: z
      .string({
        required_error: 'location is required',
      })
      .optional(),
    image: z
      .string({
        required_error: 'image is required',
      })
      .optional(),
    cetagory: z
      .string({
        required_error: 'cetagory is required',
      })
      .optional(),
    email: z
      .string({
        required_error: 'user email is required',
      })
      .optional(),
  }),
});

export const eventValidation = {
  createEventZodSchema,
  EditeEventZodSchema,
};
