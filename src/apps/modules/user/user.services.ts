import httpStatus from 'http-status';
import { ApiError } from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import bcrypt from 'bcrypt';

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

const loginUser = async (payload: IUser): Promise<IUser | null> => {
  const { email, password } = payload;
  // check user exist
  const isUserExist = await User.findOne(
    { email },
    { email: 1, password: 1 }
  ).lean();

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user does not exist', '');
  }

  //  ## user password Match to the database Password
  const isPasswordMatch = await bcrypt.compare(password, isUserExist?.password);

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Your Password incorrect', '');
  }

  return isUserExist;
};

// exported there UserServices | Or imported there user.createUserController.ts file |
export const UserServices = {
  createdUser,
  loginUser,
};
