import mongoose from "mongoose";

const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    creator: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("places", placeSchema);
