import { Document } from 'mongoose';

export interface Menu extends Document {
  readonly name: string;
  readonly price: number;
  readonly isActive: boolean;
  readonly description: string;
}
