const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    balance: {
      type: Number,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
