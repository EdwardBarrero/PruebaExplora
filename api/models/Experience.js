const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const experienceSchema = new Schema({
  title: String,
  description: String,
  interactiveRoom: String,
  relatedImg: String,
});

const Experience = model("Experience", experienceSchema);



module.exports = Experience;
