import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { bookingServices } from './event_booking.service';
import { Request, Response } from 'express';

//01. ==========> created A event Booking functionality =========>
const createbookingEvent = catchAsync(async (req: Request, res: Response) => {
  const eventdata = req.body;

  // export (event data) event_booking.services.ts file
  const result = await bookingServices.createdbooking(eventdata);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'A User created successfully',
  });
});

//03. singel details  Event functionality
const singelBookingEvent = catchAsync(async (req: Request, res: Response) => {
  const getEvent = req.params.id;

  const result = await bookingServices.detailsBooking(getEvent);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'display details event successfully',
  });
});

export const eventBookingController = {
  createbookingEvent,
  singelBookingEvent,
};
