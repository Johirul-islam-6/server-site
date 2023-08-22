import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { eventValidation } from './event.validation';
import { CreateEventController } from './event.controller';

const router = express.Router();
// ## this all Event route
//  created a event a user
// get all event & Querys pagination

// =====> zod validation => controller => services - there all business logic implement

//01.create a event
router.post(
  '/create-event',
  validateRequest(eventValidation.createEventZodSchema),
  CreateEventController.createEvent
);

//02. get singel event
router.get('/:id', CreateEventController.singelDetailsEvent);

// 03.get all event & all querys
router.get('/', CreateEventController.getAllEventQuerys);
export const EventRoutes = router;
