import mongoose from "mongoose";

const QADailySchema = {
  title: { type: String },
  question: { type: String },
  answer: { type: String },
  img: { type: String },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
}

const DailySchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    heDate: { type: String, required: true },
    currentParasha: [{
      name: { type: String || null, required: true },
      q: [QADailySchema]
    }],
    upcomingHoliday: [{
      name: { type: String || null, required: true },
      q: [QADailySchema]
    }],
  },
  { timestamps: true }
);
const DailyModel = mongoose.models["daily"] || mongoose.model("daily", DailySchema);

export default DailyModel;
