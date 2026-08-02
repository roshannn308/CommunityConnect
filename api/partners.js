import { connectDB } from "../_lib/db.js";
import PartnerRequest from "../_lib/models/PartnerRequest.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const { homeName, contactPerson, phone, email, city, residentCount, message } = req.body || {};
  if (!homeName || !contactPerson || !phone || !email || !city || !message) {
    return sendError(res, 400, "Please fill in every required field.");
  }

  await connectDB();
  const request = await PartnerRequest.create({
    homeName,
    contactPerson,
    phone,
    email,
    city,
    residentCount: residentCount || undefined,
    message,
  });

  res.status(201).json({ request });
}

export default withErrorHandling(handler);
