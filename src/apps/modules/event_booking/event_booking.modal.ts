import { Schema, model } from 'mongoose';
import {
  IEventBooking,
  IEventBookingModal,
} from '../event_booking/event_booking.interface';

// ## Create a User Schema Model corresponding to the document interface.

const eventBookingSchema = new Schema<IEventBooking>(
  {
    userEmail: {
      type: String,
      required: true,
      // unique: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// ## this is database Model/collection Name.
export const Event_Booking = model<IEventBooking, IEventBookingModal>(
  'event-booking',
  eventBookingSchema
);
