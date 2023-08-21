import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type IEventInterface = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  email: string;
};

// Create a new Model type that knows about IUserMethods...
export type ModelEvent = Model<IEventInterface, Record<string, unknown>>;
