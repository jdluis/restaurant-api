import { DATA_BASE } from './../../constants';
import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const usersProviders = [
  {
    provide: DATA_BASE.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATA_BASE.DATABASE_CONNECTION],
  },
];

/* Also, make sure that the DatabaseModule exports the DATABASE_CONNECTION as well as USER_MODELModel so that they can be used by other modules.
If the issue persists, it might be helpful to check the full stack trace of the error message to see if there are any other clues about what might be causing the issue. */
