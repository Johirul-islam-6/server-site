"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBookingValidation = void 0;
const zod_1 = require("zod");
// create a User zod validation
const evenBookingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userEmail: zod_1.z.string({
            required_error: 'email is required',
        }),
        eventId: zod_1.z
            .string({
            required_error: 'Event Id is required',
        })
            .optional(),
        bookingDate: zod_1.z.string({
            required_error: 'Booking Date  is required',
        }),
        bookingTime: zod_1.z.string({
            required_error: 'Booking Time slot is required',
        }),
    }),
});
exports.EventBookingValidation = {
    evenBookingZodSchema,
};
