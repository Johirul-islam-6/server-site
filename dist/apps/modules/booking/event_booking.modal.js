"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event_Booking = void 0;
const mongoose_1 = require("mongoose");
// ## Create a User Schema Model corresponding to the document interface.
const eventBookingSchema = new mongoose_1.Schema({
    userEmail: {
        type: String,
        required: true,
        // unique: true,
    },
    eventId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        // unique: true,
    },
    bookingDate: {
        type: String,
        required: true,
    },
    bookingTime: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// ## this is database Model/collection Name.
exports.Event_Booking = (0, mongoose_1.model)('event-booking', eventBookingSchema);
