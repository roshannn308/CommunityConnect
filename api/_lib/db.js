import mongoose from "mongoose";

// Serverless functions can be invoked many times against a warm container.
// Caching the connection on `global` avoids exhausting MongoDB's connection
// limit by reconnecting on every request.
let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error(
      "MONGO_URI is not set. Add it in Vercel → Settings → Environment Variables (see .env.example)."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { bufferCommands: false })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
