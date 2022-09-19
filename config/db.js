const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => console.log(err));

  console.log(`MongoDB Connected`);
};

module.exports = connectDB;
