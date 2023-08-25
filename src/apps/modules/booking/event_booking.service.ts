import { IEventBooking } from './event_booking.interface';
import { Event_Booking } from './event_booking.modal';

// -----> single user created business logic------>
const createdbooking = async (
  eventdata: IEventBooking
): Promise<IEventBooking | null> => {
  console.log(eventdata);
  const createAuser = await Event_Booking.create(eventdata);

  if (!createAuser) {
    throw new Error('Faild to Event Booking');
  }
  return createAuser;
};

//03. get all Event business logic
const detailsBooking = async (id: string): Promise<IEventBooking[] | null> => {
  console.log(id);
  const getEvent = await Event_Booking.find({ eventId: id });
  console.log(getEvent);

  if (getEvent.length === 0) {
    throw new Error('No matching events found.');
  }

  return getEvent;
};

export const bookingServices = {
  createdbooking,
  detailsBooking,
};
