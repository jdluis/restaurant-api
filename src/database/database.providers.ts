import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/restaurant-api',
      ),
  },
];
