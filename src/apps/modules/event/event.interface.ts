import { Model } from 'mongoose';

// date or searching interface
export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IEventInterface = {
  // this is querys property
  meta?: { page: number; limit: number; total: number } | undefined;
  data?: IEventInterface[] | null | undefined;
  // event input field value created interface
  title: string;
  description: string;
  start_date: IAcademicSemesterMonth;
  end_date: IAcademicSemesterMonth;
  location: string;
  email: string;
  image: string;
  cetagory: string;
};

// servecesfile parameter filter value interface searching value
export type IEventFilters = {
  searchTerm?: string;
};

// Create a new ModelEvent type that knows about ...
export type ModelEvent = Model<IEventInterface, Record<string, unknown>>;
