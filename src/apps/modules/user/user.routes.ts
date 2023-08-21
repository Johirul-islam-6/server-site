import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { CreateUserController } from './user.controller';

// ## this all user route
//  created a user
// get all user

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  CreateUserController.userCreated
);

router.get('/', CreateUserController.getUsers);

export const UserRoutes = router;
