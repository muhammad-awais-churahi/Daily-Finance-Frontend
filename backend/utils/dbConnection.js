const mongoose = require("mongoose");
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.url);
    console.log(`Connection to db:${conn.connection.host}`);
  } catch (err) {
    console.log("Error is:", err);
  }
};
module.exports = connection;
