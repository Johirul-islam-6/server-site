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

export const bookingServices = {
  createdbooking,
};
