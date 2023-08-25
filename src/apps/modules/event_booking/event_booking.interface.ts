// import { Schema, model } from 'mongoose';

import { Model } from 'mongoose';

// event booking inferface
export type IEventBooking = {
  eventId?: string;
  userEmail: string;
  bookingDate: string;
  bookingTime: string;
};

// Create a new Model type that knows about IUserMethods...
export type IEventBookingModal = Model<IEventBooking, Record<string, unknown>>;
