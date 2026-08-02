import { connectDB } from "../_lib/db.js";
import Event from "../_lib/models/Event.js";
import { allowMethods, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["GET"])) return;

  await connectDB();
  const events = await Event.find({ date: { $gte: new Date() } })
    .sort({ date: 1 })
    .limit(50);

  res.status(200).json({ events });
}

export default withErrorHandling(handler);
