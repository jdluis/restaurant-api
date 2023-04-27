interface app_global_types {
  TITLE_WELCOME: string;
}
interface app_database_types {
  USER_MODEL: string;
  MENU_MODEL: string;
  DATABASE_CONNECTION: string;
}

export const APP_GLOBAL: app_global_types = Object.freeze({
  TITLE_WELCOME: 'Welcome to Restauran API by jdluisdev',
});

export const DATA_BASE: app_database_types = Object.freeze({
  USER_MODEL: 'USER_MODEL',
  MENU_MODEL: 'MENU_MODEL',
  DATABASE_CONNECTION: 'DATABASE_CONNECTION',
});
