import mongoose from "mongoose";

const VolunteerApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    availability: { type: String, required: true, trim: true },
    motivation: { type: String, required: true, trim: true },
    status: { type: String, enum: ["pending", "contacted", "onboarded"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.VolunteerApplication ||
  mongoose.model("VolunteerApplication", VolunteerApplicationSchema);
