const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const TASK = mongoose.model("singleTask", taskSchema);

module.exports = TASK;
