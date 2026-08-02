import { connectDB } from "../_lib/db.js";
import User from "../_lib/models/User.js";
import { getAuth } from "../_lib/auth.js";
import { allowMethods, sendError, withErrorHandling } from "../_lib/http.js";

async function handler(req, res) {
  if (!allowMethods(req, res, ["GET"])) return;

  const auth = getAuth(req);
  if (!auth) return sendError(res, 401, "Not logged in.");

  await connectDB();
  const user = await User.findById(auth.sub);
  if (!user) return sendError(res, 401, "Not logged in.");

  res.status(200).json({
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
}

export default withErrorHandling(handler);
