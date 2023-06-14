import { Document, Types } from 'mongoose';

export interface User extends Document<Types.ObjectId> {
  readonly id: number;
  readonly password: string;
  readonly name: string;
  readonly email: string;
  readonly type: string;
}
