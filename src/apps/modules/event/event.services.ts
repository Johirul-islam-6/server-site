import { SortOrder } from 'mongoose';
import { HelperPagination } from '../../../helpers/paginationHelper';
import { IGenaricRespons } from '../../../interfaces/common';
import { IPaginationOpton } from '../../../interfaces/pagination';
import { eventSearchableFields } from './event.constant';
import { IEventFilters, IEventInterface } from './event.interface';
import { EventModel } from './event.model';

// 01. create a event
const createServices = async (
  event: IEventInterface
): Promise<IEventInterface | null> => {
  const createEvent = await EventModel.create(event);

  if (!createEvent) {
    throw new Error('Faild to create Event');
  }

  return createEvent;
};

// 02.get all event & query business logic
const eventQuerysServices = async (
  filtering: IEventFilters,
  paginationOption: IPaginationOpton
): Promise<IGenaricRespons<IEventInterface[]> | null> => {
  const { searchTerm, ...filtersData } = filtering;

  // there adConditions = [] condition base data display in side array
  const andConditions = [];

  // get  all sesrching condition data [multiputl field then we are apply map]
  if (searchTerm) {
    andConditions.push({
      $or: eventSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  //get all filtering condition data [multiputl field then we are apply map]
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // pagination calculation data [ this is page, limit, sort, sortOrder value resive and calculation base data show]
  const { page, limit, skip, sortBy, sortOrder } =
    HelperPagination.calculationPagination(paginationOption);

  // sort conditions base get all data
  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // condition display data show
  const whereConditons =
    andConditions.length > 0 ? { $and: andConditions } : {};

  // get to the all data in mongoDb model/collection .
  const result = await EventModel.find(whereConditons)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  //total modal/collection data length
  const total = await EventModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//03. singel details Event business logic
const detailsServices = async (id: string): Promise<IEventInterface | null> => {
  const singelEvent = await EventModel.findOne({ id });

  if (!singelEvent) {
    throw new Error('Faild to details Event');
  }

  return singelEvent;
};

//04. singel details Event business logic
const editeServices = async (
  id: string,
  updateEventData: IEventInterface
): Promise<IEventInterface | null> => {
  const updateEvent = await EventModel.findByIdAndUpdate(id, updateEventData, {
    new: true,
  });

  if (!updateEvent) {
    throw new Error('Faild to Update Event');
  }

  return updateEvent;
};

export const eventServices = {
  createServices,
  eventQuerysServices,
  detailsServices,
  editeServices,
};
