import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { EventBookingValidation } from './event_booking.validation';
import { eventBookingController } from './event_booking.controller';

const router = express.Router();
// https://gdg.community.dev/gdg-dhaka/

// ## this all user route
//  created a user
// get all user

//01. create a user
router.post(
  '/create',
  validateRequest(EventBookingValidation.evenBookingZodSchema),
  eventBookingController.createbookingEvent
);

// get one event all booking user
router.get('/:id', eventBookingController.singelBookingEvent);

export const BookingRoute = router;
