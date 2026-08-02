import { connectDB } from "../_lib/db.js";
import VolunteerApplication from "../_lib/models/VolunteerApplication.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const { name, email, phone, city, availability, motivation } = req.body || {};
  if (!name || !email || !phone || !city || !availability || !motivation) {
    return sendError(res, 400, "Please fill in every field.");
  }

  await connectDB();
  const application = await VolunteerApplication.create({
    name,
    email,
    phone,
    city,
    availability,
    motivation,
  });

  res.status(201).json({ application });
}

export default withErrorHandling(handler);
