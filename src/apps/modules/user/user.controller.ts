import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.services';
import { User } from './user.model';
import { IUserLogin } from './user.interface';
import config from '../../../config';

//## catchAsync is a costom Hook error handeling try-catch  | shared/catchAsync file |
// ## sendResponse is a responsiv data costom Hook reated | shared/sendResponse file |]

//01. ==========> created an user functionality =========>
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

//02.========> login a user email, password ==========>

const loginAuth = catchAsync(async (req: Request, res: Response) => {
  const loginData = req.body;
  const result = await UserServices.loginUser(loginData);

  if (result !== null) {
    const { refreshToken, ...others } = result;

    // Set refresh token in cookies
    const cookiesOption = {
      secure: config.evn === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookiesOption);

    sendResponse<IUserLogin>(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: others,
      message: 'A User successfully Login',
    });
  } else {
    // Handle the case where login is unsuccessful
    sendResponse<IUserLogin>(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: 'Login failed. Invalid credentials.',
    });
  }
});

// 03. ======> get all users functionality an business small logic ========>
const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await User.find({});
  res.send(result);
});

// exported there CreateUserController | Or imported there user.routes.ts file |
export const CreateUserController = {
  userCreated,
  getUsers,
  loginAuth,
};
