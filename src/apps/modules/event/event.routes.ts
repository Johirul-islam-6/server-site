import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { eventValidation } from './event.validation';
import { CreateEventController } from './event.controller';

// ## this all Event route
//  created a event a user
// get all event & Querys

// =====> zod validation => controller => services - there all business logic implement

const router = express.Router();

router.post(
  '/create-event',
  validateRequest(eventValidation.createEventZodSchema),
  CreateEventController.createEvent
);

export const EventRoutes = router;
