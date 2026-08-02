import { connectDB } from "../_lib/db.js";
import Event from "../_lib/models/Event.js";
import { getAuth } from "../_lib/auth.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const auth = getAuth(req);
  if (!auth) return sendError(res, 401, "Log in to join an event.");

  const { eventId } = req.body || {};
  if (!eventId) return sendError(res, 400, "eventId is required.");

  await connectDB();
  const event = await Event.findById(eventId);
  if (!event) return sendError(res, 404, "That event no longer exists.");

  const alreadyIn = event.attendees.some((id) => id.toString() === auth.sub);
  if (alreadyIn) {
    return res.status(200).json({ event });
  }

  if (event.attendees.length >= event.seatsTotal) {
    return sendError(res, 409, "That event is fully booked.");
  }

  event.attendees.push(auth.sub);
  await event.save();

  res.status(200).json({ event });
}

export default withErrorHandling(handler);
