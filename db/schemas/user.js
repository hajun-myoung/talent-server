import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  talent: {
    type: Number,
    required: true,
    default: 0,
    unique: false,
  },
  id: {
    // need to same with QR Data
    type: Number,
    min: 1000,
    max: 9999,
    default: 1000,
    required: true,
    unique: true,
  },
  team: {
    type: Number,
    required: true,
    unique: false,
    default: -1, // -1 means no team
  },
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
