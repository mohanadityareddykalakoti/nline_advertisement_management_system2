const mongoose = require("mongoose");
const { MONGOURL } = require("../config/keys");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected");
  } catch (error) {
    console.error(`Database Connection error: ${error.message}`);
  }
};

module.exports = connectDB;
