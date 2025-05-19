import {MongoClient, ServerApiVersion} from 'mongodb';
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db('vipverse-db');

export default db;