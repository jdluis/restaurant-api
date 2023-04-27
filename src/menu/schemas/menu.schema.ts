import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isActive: Boolean,
  description: String,
});
