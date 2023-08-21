import { Model } from 'mongoose';

export type IEventInterface = {
  // event input field value created interface
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  email: string;
};

// Create a new ModelEvent type that knows about ...
export type ModelEvent = Model<IEventInterface, Record<string, unknown>>;
