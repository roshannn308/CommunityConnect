import jwt from "jsonwebtoken";

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error(
      "JWT_SECRET is not set. Add it in Vercel → Settings → Environment Variables (see .env.example)."
    );
  }
  return secret;
}

export function signToken(user) {
  return jwt.sign({ sub: user._id.toString(), role: user.role }, getSecret(), {
    expiresIn: "30d",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, getSecret());
}

// Returns the decoded token payload, or null if missing/invalid.
// Routes decide for themselves whether auth is required.
export function getAuth(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
