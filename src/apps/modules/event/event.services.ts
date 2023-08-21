import { IEventInterface } from './event.interface';
import { EventModel } from './event.model';

const createServices = async (
  event: IEventInterface
): Promise<IEventInterface | null> => {
  const createEvent = await EventModel.create(event);

  if (!createEvent) {
    throw new Error('Faild to create Event');
  }

  return createEvent;
};

export const eventServices = {
  createServices,
};
