import { Document } from 'mongoose';

export interface Chat extends Document {
  readonly user_id: string;
  readonly message: string;
}