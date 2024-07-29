import mongoose from "mongoose";


export const QASchema = new mongoose.Schema(
  {
    title: { type: String },
    isTitledApproved: { type: Boolean },
    question: { type: String, required: true },
    answer: { type: String, required: true }, 
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
    holidays: [{ type: mongoose.Schema.Types.ObjectId, ref: "holiday-parasha" }],
    date: { type: Date, required: true, default: Date.now },
    isActive: { type: Boolean, default: true },
    isSensitive: { type: Boolean, default: false},
  },
  { timestamps: true }
);
const QAModel = mongoose.models["qa"] || mongoose.model("qa", QASchema);
export default QAModel;
