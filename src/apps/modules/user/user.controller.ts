import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.services';
import { User } from './user.model';

//## catchAsync is a costom Hook created | shared/catchAsync file |
// ## sendResponse is a costom Hook reated | shared/sendResponse file |

// 01. create a user
const userCreated = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  // export (user) user.services.ts file
  const result = await UserServices.createdUser(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'A User created successfully',
  });
});

// 01. get all users
const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await User.find({});
  res.send(result);
});

// exported there CreateUserController | Or imported there user.routes.ts file |
export const CreateUserController = {
  userCreated,
  getUsers,
};
