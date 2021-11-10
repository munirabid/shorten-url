const mongoose = require("mongoose");

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  visitCount: {
    type: Number,
    default: 0,
  },
  attemptsToShorten: {
    type: Number,
    default: 1,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

// create a model from schema and export it
module.exports = mongoose.model("Url", URLSchema);
