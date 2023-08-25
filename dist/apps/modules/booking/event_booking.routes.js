"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const event_booking_validation_1 = require("./event_booking.validation");
const event_booking_controller_1 = require("./event_booking.controller");
const router = express_1.default.Router();
// https://gdg.community.dev/gdg-dhaka/
// ## this all user route
//  created a user
// get all user
//01. create a user
router.post('/create', (0, validateRequest_1.validateRequest)(event_booking_validation_1.EventBookingValidation.evenBookingZodSchema), event_booking_controller_1.eventBookingController.createbookingEvent);
// get one event all booking user
router.get('/:id', event_booking_controller_1.eventBookingController.singelBookingEvent);
exports.BookingRoute = router;
