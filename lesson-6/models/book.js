import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      match: /^[A-Za-z0-9\s\-_,\.;:()]+$/,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "Action",
        "Biography",
        "History",
        "Horror",
        "Kids",
        "Learning",
        "Sci-Fi",
      ],
    },
    year: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default mongoose.model("Book", bookSchema); // books
