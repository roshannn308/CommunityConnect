import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    category: { type: String, enum: ["Health", "Digital", "Entertainment"], default: "Health" },
    seatsTotal: { type: Number, required: true, min: 1 },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

EventSchema.virtual("seatsFilled").get(function () {
  return this.attendees?.length ?? 0;
});
EventSchema.set("toJSON", { virtuals: true });

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
