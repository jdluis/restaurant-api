import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { DATA_BASE } from '../../constants';

export const usersProviders = [
  {
    provide: DATA_BASE.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATA_BASE.DATABASE_CONNECTION],
  },
];
