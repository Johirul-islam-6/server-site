import httpStatus from 'http-status';
import { ApiError } from '../../../errors/ApiError';
import { IUser, IUserLogin } from './user.interface';
import { User } from './user.model';
import bcrypt from 'bcrypt';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

// ==============> all user business logic applies  this services page ================>

// -----> single user created business logic------>
const createdUser = async (user: IUser): Promise<IUser | null> => {
  const createAuser = await User.create(user);

  if (!createAuser) {
    throw new Error('Faild to Create A user');
  }
  return createAuser;
};

// -----> Login User business logic ------->
const loginUser = async (payload: IUser): Promise<IUserLogin | null> => {
  const { email, password } = payload;
  // check user exist
  const isUserExist = await User.findOne(
    { email },
    { email: 1, password: 1 }
  ).lean();

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user does not exist', '');
  }

  // create accessToken Token
  const accessToken = jwtHelpers.createToken(
    { email: isUserExist.email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // create refreshToken Token
  const refreshToken = jwtHelpers.createToken(
    { email: isUserExist.email },
    config.jwt.expires_in as Secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  //  ## user password Match to the database Password
  const isPasswordMatch = await bcrypt.compare(password, isUserExist?.password);

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Your Password incorrect', '');
  }

  return {
    accessToken,
    refreshToken,
  };
};

// exported there UserServices | Or imported there user.createUserController.ts file |
export const UserServices = {
  createdUser,
  loginUser,
};
