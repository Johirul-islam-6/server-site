import { Schema, model } from 'mongoose';
import { ModelEvent, IEventInterface } from './event.interface';

// ## Create a User Schema Model corresponding to the document interface.
const eventSchema = new Schema<IEventInterface>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cetagory: {
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
export const EventModel = model<IEventInterface, ModelEvent>(
  'all-event',
  eventSchema
);
