import { z } from 'zod';

// create a User zod validation
const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'password is required',
      })
      .min(6),
  }),
});

// Login a user zod validation
const loginUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .email(),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  loginUserZodSchema,
};
