// import mongoose package
const mongoose = require("mongoose");

// declare a Database string URI
const DB_URI = process.env.MONGODB_URL;

// establishing a database connection
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

// export the connection object
module.exports = connection;
