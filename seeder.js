import { v4 as uuidv4 } from "uuid";
import db from "./aws-config.js";
import books from "./seed_db_data.js";



const seed_db_data = async () => {
  const params = {
    TableName: "Bobooks",
    Item: {},
  };

  try {
    // Loop through the array and seed each object
    for (const book of books) {
      // Generate a new unique ID for each object
      params.Item.id = uuidv4(); 
      params.Item = { ...params.Item, ...book };

      await db.put(params).promise();
      console.log("Data seeded successfully:");
    }

    console.log("All data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seed_db_data();