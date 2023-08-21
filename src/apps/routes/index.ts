/* eslint-disable no-undef */
import express from 'express';
// import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    // route: UserRoutes,route.route
  },
];

moduleRoutes.forEach(route => router.use(route.path));
export default router;
