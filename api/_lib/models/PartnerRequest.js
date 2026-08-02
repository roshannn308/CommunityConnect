import mongoose from "mongoose";

const PartnerRequestSchema = new mongoose.Schema(
  {
    homeName: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    city: { type: String, required: true, trim: true },
    residentCount: { type: Number },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ["pending", "contacted", "active"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.PartnerRequest || mongoose.model("PartnerRequest", PartnerRequestSchema);
