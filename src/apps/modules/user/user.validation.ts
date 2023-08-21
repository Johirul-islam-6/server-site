import { z } from 'zod';

// zod validation error setup
const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'role is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'password is required',
      })
      .min(6),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
