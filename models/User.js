import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },

  name: { type: String },

  username: { type: String, required: true, unique: true },

  profilepic: { type: String },

  coverpic: { type: String },

  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },
});

export default models.User || model("User", userSchema);