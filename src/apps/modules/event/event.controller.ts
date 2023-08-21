import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { eventServices } from './event.services';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

//## catchAsync is a costom Hook created | shared/catchAsync file |
// ## sendResponse is a costom Hook reated | shared/sendResponse file |

//01. created an Event functionality
const createEvent = catchAsync(async (req: Request, res: Response) => {
  const eventdata = req.body;
  // export (eventdata) to  event.services.ts file
  const result = await eventServices.createServices(eventdata);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'user create a event successfully',
  });
});

// exported there CreateEventController |  imported there event.createUserController.ts file |
export const CreateEventController = {
  createEvent,
};
