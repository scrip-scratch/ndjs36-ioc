import mongoose, { Schema } from "mongoose";

const bookScheme = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  favorite: {
    type: String,
  },
  fileCover: {
    type: String,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileBook: {
    type: String,
    required: true,
  },
});

export const BookScheme = mongoose.model("BookScheme", bookScheme);
