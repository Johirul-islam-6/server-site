"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingServices = void 0;
const event_booking_modal_1 = require("./event_booking.modal");
// -----> single user created business logic------>
const createdbooking = (eventdata) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(eventdata);
    const createAuser = yield event_booking_modal_1.Event_Booking.create(eventdata);
    if (!createAuser) {
        throw new Error('Faild to Event Booking');
    }
    return createAuser;
});
//03. get all Event business logic
const detailsBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const getEvent = yield event_booking_modal_1.Event_Booking.find({ eventId: id });
    console.log(getEvent);
    if (getEvent.length === 0) {
        throw new Error('No matching events found.');
    }
    return getEvent;
});
exports.bookingServices = {
    createdbooking,
    detailsBooking,
};
