'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.EventModel = void 0;
const mongoose_1 = require('mongoose');
// ## Create a User Schema Model corresponding to the document interface.
const eventSchema = new mongoose_1.Schema(
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
exports.EventModel = (0, mongoose_1.model)('all-event', eventSchema);
