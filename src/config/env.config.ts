export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.DB_NAME,
  mongodbPassword: process.env.DB_PASSWORD,
  mongodbUsername: process.env.DB_USERNAME,
  port: process.env.APP_PORT || 3300,
});
