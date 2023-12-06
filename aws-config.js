import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const db = new DynamoDBClient({
  region: "us-east-1", // replace with your desired region
  // credentials: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID, // replace with your access key
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // replace with your secret access key
  // },
});

export default db;
