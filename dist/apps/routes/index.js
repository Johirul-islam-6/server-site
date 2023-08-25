'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
/* eslint-disable no-undef */
const express_1 = __importDefault(require('express'));
const user_routes_1 = require('../modules/user/user.routes');
const event_routes_1 = require('../modules/event/event.routes');
const router = express_1.default.Router();
const moduleRoutes = [
  //## all user parent route
  {
    path: '/users',
    route: user_routes_1.UserRoutes,
  },
  //##all event parent route
  {
    path: '/event',
    route: event_routes_1.EventRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
