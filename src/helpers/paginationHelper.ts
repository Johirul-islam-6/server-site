import { SortOrder } from 'mongoose';

type IOptionPagination = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionReturn = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};

const calculationPagination = (Option: IOptionPagination): IOptionReturn => {
  const page = Number(Option.page) || 1;
  const limit = Number(Option.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = Option.sortBy || 'createdAt';
  const sortOrder: SortOrder = Option.sortOrder || 'desc';

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const HelperPagination = {
  calculationPagination,
};
