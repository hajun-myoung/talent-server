import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  payby: {
    type: Number,
    min: 0,
    max: 9999,
    required: true,
    unique: false,
  },
  amount: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: false,
    unique: false,
    default: Date.now,
  },
});

const LogModel = mongoose.model("Log", LogSchema);
export { LogModel };
