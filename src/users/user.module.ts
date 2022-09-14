import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';


@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? process.env.API_KEY_PROD : process.env.API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async () => {
        const uri =
        process.env.URI_DATABASE
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(process.env.DATABASE);
        return database;
      },
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})

export class DatabaseModule {}
