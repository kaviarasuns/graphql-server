const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ProjectSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"] },
  clientId: {
    type: ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
