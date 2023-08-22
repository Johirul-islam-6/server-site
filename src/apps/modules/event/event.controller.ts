import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { eventServices } from './event.services';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { queryPick } from '../../../shared/quaryPick';
import { EventModel } from './event.model';

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

//03. singel details  Event functionality
const singelDetailsEvent = catchAsync(async (req: Request, res: Response) => {
  const singelEvent = req.body.id;

  const result = await eventServices.detailsServices(singelEvent);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'display details event successfully',
  });
});

//04.  Edite  Event functionality
const EditeEvent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateEventData = req.body;

  const result = await eventServices.editeServices(id, updateEventData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'Edited event successfully',
  });
});

//04.  Delete a Event functionality
const DeleteEvent = catchAsync(async (req: Request, res: Response) => {
  const id = req.body.id;

  const result = await EventModel.deleteOne(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'Delete event successfully',
  });
});

// exported there CreateEventController |  imported there event.createUserController.ts file |
export const CreateEventController = {
  createEvent,
  getAllEventQuerys,
  singelDetailsEvent,
  EditeEvent,
  DeleteEvent,
};
