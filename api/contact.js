import { connectDB } from "../_lib/db.js";
import ContactMessage from "../_lib/models/ContactMessage.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return sendError(res, 400, "Please fill in every field.");
  }

  await connectDB();
  await ContactMessage.create({ name, email, message });

  res.status(201).json({ ok: true });
}

export default withErrorHandling(handler);
