import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      collection: process.env.COLLECTION,
      typedb: process.env.TYPEDB,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWTSECRET,
  };
});
