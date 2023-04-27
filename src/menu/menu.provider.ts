import { Connection } from 'mongoose';
import { DATA_BASE } from '../../constants';
import { MenuSchema } from './schemas/menu.schema';

export const menuProviders = [
  {
    provide: DATA_BASE.MENU_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Menu', MenuSchema),
    inject: [DATA_BASE.DATABASE_CONNECTION],
  },
];
