import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})