const mongoose = require("mongoose");
const { Schema } = mongoose;

const impEventSchema = new Schema({
  eventname: {
    type: String,
    required: true
  },
  eventdate: {
    type: Date,
    required: true
  },
  eventimage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ImportantEvents', impEventSchema);
