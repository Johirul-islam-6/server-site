import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';

// ## this all user route
//  created a user
// get all user

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  CreateUserController.userCreated
);

export const LoginAuthRoutes = router;
