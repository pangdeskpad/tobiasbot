import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: ''
  },
  last_name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase:true
  },
  password: {
  	type: String,
  	required: true,
  	minlength: 3
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})