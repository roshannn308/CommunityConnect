// Small helpers shared by every /api function. Vercel's Node runtime gives
// us plain (req, res) — no Express — so we keep this intentionally minimal.

export function withCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

export function allowMethods(req, res, methods) {
  withCors(res);
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return false;
  }
  if (!methods.includes(req.method)) {
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
    return false;
  }
  return true;
}

export function sendError(res, status, message) {
  res.status(status).json({ message });
}

// Wraps a handler so unexpected errors (bad MONGO_URI, DB timeouts, etc.)
// come back as a clean JSON message instead of a raw 500 stack trace.
export function withErrorHandling(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error(err);
      sendError(res, 500, err.message || "Unexpected server error.");
    }
  };
}
