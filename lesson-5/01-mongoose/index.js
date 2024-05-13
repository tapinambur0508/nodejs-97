import mongoose from "mongoose";

const DB_URI = `mongodb+srv://studenter1:d"ue78Ew'3Pv@cluster0.dtfqrqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
