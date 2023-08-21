import { IUser } from './user.interface';
import { User } from './user.model';

// ==================> all user business logic applies to this page ====================>

// -----single user created business logic------
const createdUser = async (user: IUser): Promise<IUser | null> => {
  const createAuser = await User.create(user);

  if (!createAuser) {
    throw new Error('Faild to Create A user');
  }
  return createAuser;
};

// exported there UserServices | Or imported there user.createUserController.ts file |
export const UserServices = {
  createdUser,
};
