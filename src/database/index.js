import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://maasoodrehman:alibaba5710@cluster0.lkasuit.mongodb.net/",
      {
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      }
    );
    console.log("database connected successfully");
  } catch (e) {
    console.error("error while connecting to database", e);
  }
}
