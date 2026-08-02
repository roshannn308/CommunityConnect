# CommunityConnect

A volunteer-matching platform for old age homes: companion visits, digital
literacy sessions, and community activities — built as one Vercel project
(React/Vite frontend + serverless API functions).

## ⚠️ Before you do anything else

Your original project's `server/.env` had a **real MongoDB Atlas password and
JWT secret committed in plain text**. Those are not reused anywhere in this
rebuild. Please:

1. Go to MongoDB Atlas → Database Access and **rotate that user's password**
   (or delete the user and create a new one).
2. Never commit a real `.env` file — this repo's `.gitignore` already
   excludes it, and `.env.example` only has placeholders.

## Stack

- **Frontend:** React 19 + Vite + Tailwind CSS v4 + React Router + Framer Motion
- **Backend:** Vercel serverless functions (`/api`) + MongoDB (Mongoose) + JWT auth
- **Deploy target:** a single Vercel project — frontend and API ship together,
  so there's no CORS setup or separate hosting to manage

## Project structure

```
CommunityConnect/
├── src/                 # React frontend
│   ├── components/      # shared UI + home page sections
│   ├── pages/            # route-level pages
│   ├── context/          # auth context
│   └── lib/api.js        # axios client
├── api/                 # Vercel serverless functions
│   ├── _lib/              # db connection, models, auth helpers (not routes)
│   ├── auth/              # register, login, me
│   ├── events/             # list, join
│   ├── volunteers.js       # volunteer applications
│   ├── partners.js         # care home partnership requests
│   └── contact.js          # contact form
├── scripts/seed.js      # populates sample events
└── vercel.json
```

## Local development

You'll need Node 18+ and a MongoDB connection string (a free
[MongoDB Atlas](https://www.mongodb.com/atlas) cluster works fine).

```bash
npm install
cp .env.example .env      # then fill in MONGO_URI and JWT_SECRET
npm run seed               # optional: adds a few sample events
```

Run frontend and API together with the Vercel CLI (recommended, matches
production routing exactly):

```bash
npm i -g vercel   # if you don't have it
vercel dev
```

Or run just the frontend against a separately-running API:

```bash
npm run dev
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. Framework preset
   auto-detects as Vite — leave the build command/output as-is
   (`vercel.json` already sets them).
3. Under **Settings → Environment Variables**, add:
   - `MONGO_URI` — your MongoDB Atlas connection string
   - `JWT_SECRET` — a long random string (`node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`)
4. Deploy. The frontend is served as a static build; `/api/*` requests run as
   serverless functions automatically — no extra configuration needed.
5. Optional: run `npm run seed` locally once, pointed at your production
   `MONGO_URI`, to give the deployed site some starter events.

## Notes on what changed from the original

- Replaced the generic dark-slate/cyan template look with a warm, original
  visual identity built around a "pinned noticeboard" motif and custom SVG
  illustrations (the old `src/assets/*.jpg` files were actually empty
  placeholders, not real photos).
- Consolidated the separate `server/` Express app into `/api` serverless
  functions so the whole project deploys as one Vercel project.
- Added working auth (JWT + bcrypt), a real events/RSVP flow, and volunteer /
  care-home / contact forms that persist to MongoDB.
- Filled in the previously-empty `Dashboard`, `NotFound`, and `Elderly`
  (now `Partner`) pages.
