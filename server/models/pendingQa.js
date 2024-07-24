// import mongoose from "mongoose";

// const PendingQASchema = new mongoose.Schema(
//   {
//     title: { type: String },
//     question: { type: String, required: true },
//     date: { type: Date, required: true, default: Date.now },
//     status: {}

//   },
//   { timestamps: true }
// );
// const pendingQAModel = mongoose.models["qa"] || mongoose.model("qa", PendingQASchema);
// export default pendingQAModel;


import mongoose from "mongoose";

const PendingQASchema = new mongoose.Schema(
  {
    title: { type: String },
    question: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    status: { 
      type: String, 
      required: true, 
      enum: ['pending', 'answered', 'rejected'],
      default: 'pending'
    },
    isActive: {type: Boolean, default: true},
    contactDetails: {
      contactBy: { 
        type: String, 
        required: true, 
        enum: ['email', 'sms', 'whatsapp'] 
      },
      email: { 
        type: String,
        required: function() { return this.contactDetails.contactBy === 'email'; },
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      phone: { 
        type: String,
        required: function() { return ['sms', 'whatsapp'].includes(this.contactDetails.contactBy); },
        match: [/^\d{10}$/, 'Phone number must be 10 digits']
      }
    }
  },
  { timestamps: true }
);

const pendingQAModel = mongoose.models["pending-qa"] || mongoose.model("pending-qa", PendingQASchema);
export default pendingQAModel;