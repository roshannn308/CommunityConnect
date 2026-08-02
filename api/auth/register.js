import bcrypt from "bcryptjs";
import { connectDB } from "../_lib/db.js";
import User from "../_lib/models/User.js";
import { signToken } from "../_lib/auth.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const { name, email, password, role } = req.body || {};
  if (!name || !email || !password) {
    return sendError(res, 400, "Name, email, and password are required.");
  }
  if (password.length < 8) {
    return sendError(res, 400, "Password must be at least 8 characters.");
  }

  await connectDB();

  const existing = await User.findOne({ email: email.toLowerCase().trim() });
  if (existing) {
    return sendError(res, 409, "An account with that email already exists.");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email: email.toLowerCase().trim(),
    passwordHash,
    role: role === "coordinator" ? "coordinator" : "volunteer",
  });

  const token = signToken(user);
  res.status(201).json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
}

export default withErrorHandling(handler);
