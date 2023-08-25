'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.EventRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = require('../../middlewares/validateRequest');
const event_validation_1 = require('./event.validation');
const event_controller_1 = require('./event.controller');
const router = express_1.default.Router();
// ## this all Event route
//  created a event a user
// get all event & Querys pagination
// =====> every Route file navigateing => zod validation => controller => services - there all business logic implement
//01.create a event
router.post(
  '/create-event',
  (0, validateRequest_1.validateRequest)(
    event_validation_1.eventValidation.createEventZodSchema
  ),
  event_controller_1.CreateEventController.createEvent
);
//02. get singel event
router.get('/:id', event_controller_1.CreateEventController.singelDetailsEvent);
//03. Edite singel event8
router.patch(
  '/:id',
  (0, validateRequest_1.validateRequest)(
    event_validation_1.eventValidation.EditeEventZodSchema
  ),
  event_controller_1.CreateEventController.EditeEvent
);
//03. Edite singel event
router.delete('/:id', event_controller_1.CreateEventController.DeleteEvent);
// 04.get all event & all querys
router.get('/', event_controller_1.CreateEventController.getAllEventQuerys);
exports.EventRoutes = router;
