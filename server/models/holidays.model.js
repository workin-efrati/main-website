import mongoose from "mongoose";

const HolidaysSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    coverImage: { type: String },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "tag" },
    topicImages: [String],
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
    isActive: { type: Boolean, default: true },
    type: { 
      type: String, 
      required: true, 
      enum: ['holiday', 'parasha'],
    },
    questions:[{ type: mongoose.Schema.Types.ObjectId, ref: "qa" }],

  },
  { timestamps: true }
);
const HolidaysModel = mongoose.models["holiday-parasha"] || mongoose.model("holiday-parasha", HolidaysSchema);

export default HolidaysModel;
