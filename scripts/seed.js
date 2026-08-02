// Run with: npm run seed
// Populates a handful of sample events so the calendar isn't empty on a
// fresh database. Safe to re-run — it clears existing events first.
import "dotenv/config";
import mongoose from "mongoose";
import Event from "../api/_lib/models/Event.js";

const sampleEvents = [
  { title: "Yoga & Wellness Session", date: new Date("2026-08-30"), location: "Sunrise Old Age Home", seatsTotal: 25, category: "Health" },
  { title: "Digital Literacy Workshop", date: new Date("2026-08-05"), location: "Community Hall", seatsTotal: 40, category: "Digital" },
  { title: "Music & Storytelling Evening", date: new Date("2026-08-12"), location: "Harmony Old Age Home", seatsTotal: 30, category: "Entertainment" },
  { title: "Smartphone Basics", date: new Date("2026-08-22"), location: "Community Hall", seatsTotal: 35, category: "Digital" },
  { title: "Chair Yoga & Breathing", date: new Date("2026-08-26"), location: "Harmony Old Age Home", seatsTotal: 25, category: "Health" },
];

async function seed() {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not set. Copy .env.example to .env and fill it in first.");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);
  await Event.deleteMany({});
  await Event.insertMany(sampleEvents);
  console.log(`Seeded ${sampleEvents.length} events.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
