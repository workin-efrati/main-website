import mongoose from "mongoose";

const HolidaysSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    coverImage: { type: String },
    topicImages: [String],
    isActive: { type: Boolean, default: true },
    type: { 
      type: String, 
      required: true, 
      enum: ['holiday', 'parasha'],
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
    questions:[{ type: mongoose.Schema.Types.ObjectId, ref: "qa" }],

  },
  { timestamps: true }
);
const HolidaysModel = mongoose.models["holiday-parasha"] || mongoose.model("holiday-parasha", HolidaysSchema);

export default HolidaysModel;
