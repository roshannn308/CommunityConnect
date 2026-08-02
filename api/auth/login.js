import bcrypt from "bcryptjs";
import { connectDB } from "../_lib/db.js";
import User from "../_lib/models/User.js";
import { signToken } from "../_lib/auth.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["POST"])) return;

  const { email, password } = req.body || {};
  if (!email || !password) {
    return sendError(res, 400, "Email and password are required.");
  }

  await connectDB();

  const user = await User.findOne({ email: email.toLowerCase().trim() });
  if (!user) {
    return sendError(res, 401, "Incorrect email or password.");
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return sendError(res, 401, "Incorrect email or password.");
  }

  const token = signToken(user);
  res.status(200).json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
}

export default withErrorHandling(handler);
