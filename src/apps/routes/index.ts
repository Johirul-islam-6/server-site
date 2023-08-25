/* eslint-disable no-undef */
import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { EventRoutes } from '../modules/event/event.routes';
import { BookingRoute } from '../modules/event_booking/event_booking.routes';

const router = express.Router();

const moduleRoutes = [
  //## all user parent CRED route
  {
    path: '/users',
    route: UserRoutes,
  },

  //##all event CRED parent route
  {
    path: '/event',
    route: EventRoutes,
  },
  //## event Booking CRED parent route
  {
    path: '/event-booking',
    route: BookingRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
