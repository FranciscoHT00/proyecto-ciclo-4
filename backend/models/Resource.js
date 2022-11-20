const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let resourceSchema = new Schema(
  {
    type: {
      type: String,
    },
    color: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    seller: {
      type: String,
    },
  },
  {
    collection: "resources",
  }
);

module.exports = mongoose.model("Resource", resourceSchema);
