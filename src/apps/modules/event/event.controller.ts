import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { eventServices } from './event.services';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { queryPick } from '../../../shared/quaryPick';

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

//02. get all event  querys function

const getAllEventQuerys = catchAsync(async (req: Request, res: Response) => {
  // this is filters property
  const filtering = queryPick(req.query, [
    'searchTerm',
    'title',
    'location',
    'start_date',
    'end_date',
    'email',
  ]);

  // pagination option property field
  const pagintionField = ['page', 'limit', 'sortBy', 'sortOrder'];

  // querypick is costom funtcion
  const paginationOption = queryPick(req.query, pagintionField);

  const result = await eventServices.eventQuerysServices(
    filtering,
    paginationOption
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all event successfully',
    meta: result?.meta,
    data: result?.data,
  });
});

//01. singel details  Event functionality
const singelDetailsEvent = catchAsync(async (req: Request, res: Response) => {
  const singelEvent = req.body.query;

  const result = await eventServices.detailsServices(singelEvent);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'display details event successfully',
  });
});

// exported there CreateEventController |  imported there event.createUserController.ts file |
export const CreateEventController = {
  createEvent,
  getAllEventQuerys,
  singelDetailsEvent,
};
