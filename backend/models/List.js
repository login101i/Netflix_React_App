const { Mongoose } = require("mongoose");
const mogoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
    },
    content: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.export = mongoose.module("List", ListSchema);
