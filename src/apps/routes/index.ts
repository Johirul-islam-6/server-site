/* eslint-disable no-undef */
import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { EventRoutes } from '../modules/event/event.routes';

const router = express.Router();

const moduleRoutes = [
  //## all user parent route
  {
    path: '/users',
    route: UserRoutes,
  },

  //##all event parent route
  {
    path: '/event',
    route: EventRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
