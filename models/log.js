const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const logSchema = new Schema({
  customer: { type: String, required: true },
  ticket: { type: String, required: true },
  hours: { type: String, required: true },
  vin: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now}
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
