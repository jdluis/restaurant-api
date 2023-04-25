import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: {
    type: String,
    enum: ['admin', 'client'],
  },
});
