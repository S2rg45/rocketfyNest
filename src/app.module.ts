import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const uri = 'mongodb+srv://sergio:WfxPMrmkjASqMMM3@cluster0.ybmgvx1.mongodb.net/PokeUser?authSource=admin&retryWrites=true&w=majority'
const client = new MongoClient(uri)
async function run() {
  await client.connect()
  const database = client.db('PokeUser')
  const userCollection = database.collection('User')
  const user = await userCollection.find().toArray()
  console.log(user)
}

run()

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
