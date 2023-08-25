'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserValidation = void 0;
const zod_1 = require('zod');
// create a User zod validation
const createUserZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    email: zod_1.z
      .string({
        required_error: 'email is required',
      })
      .email(),
    password: zod_1.z
      .string({
        required_error: 'password is required',
      })
      .min(6),
  }),
});
// Login a user zod validation
const loginUserZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    email: zod_1.z
      .string({
        required_error: 'email is required',
      })
      .email(),
    password: zod_1.z.string({
      required_error: 'password is required',
    }),
  }),
});
exports.UserValidation = {
  createUserZodSchema,
  loginUserZodSchema,
};
