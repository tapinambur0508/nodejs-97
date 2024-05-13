import "dotenv/config";

import mongoose from "mongoose";

console.log(process.env.DB_URI);

const DB_URI = process.env.DB_URI;

async function run() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connection successfully");
  } catch (error) {
    console.error("Database connection failure:", error);
  } finally {
    await mongoose.disconnect();
  }
}

run().catch(console.error);
