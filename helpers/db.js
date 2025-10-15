import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://varje:kivilavarje@cluster0.kn34mzd.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );

  return client;
}
