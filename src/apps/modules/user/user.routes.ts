import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { CreateUserController } from './user.controller';

const router = express.Router();
// https://gdg.community.dev/gdg-dhaka/
// ## this all user route
//  created a user
// get all user

//01. create a user
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  CreateUserController.userCreated
);
// 02. login a user email , password
router.post(
  '/login',
  validateRequest(UserValidation.loginUserZodSchema),
  CreateUserController.loginAuth
);

router.get('/', CreateUserController.getUsers);

export const UserRoutes = router;
