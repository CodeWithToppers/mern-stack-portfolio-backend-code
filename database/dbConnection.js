import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Portfolio",
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log(`Some Error Occured While Connecting to Database: ${error}`);
    });
};

export default dbConnection;
