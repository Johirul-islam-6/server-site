import { IGenericErrorMassage } from './GlobalError';

export type IgenericErrorRespons = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMassage[];
};

export type IGenaricRespons<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
