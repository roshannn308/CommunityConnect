import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import EventCard from "../components/EventCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

function Dashboard() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .get("/events")
      .then(({ data }) => {
        if (!cancelled) setEvents(data.events ?? []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const mine = events.filter((e) => e.attendees?.includes(user?.id));
  const others = events.filter((e) => !e.attendees?.includes(user?.id));

  return (
    <>
      <Navbar />
      <div className="bg-sand border-b border-line py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-3">
            {user.role === "coordinator" ? "Coordinator dashboard" : "Volunteer dashboard"}
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink">
            Welcome back, {user.name?.split(" ")[0]}
          </h1>
          <p className="text-ink-soft mt-3 max-w-xl">
            {user.role === "coordinator"
              ? "Here's what's on the calendar across your partner homes."
              : "Here's what you've signed up for, and what's coming up next."}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        {loading ? (
          <p className="text-ink-soft">Loading your events…</p>
        ) : events.length === 0 ? (
          <div className="bg-cream-card border border-line rounded-md p-10 text-center">
            <p className="text-ink-soft">
              No events are on the calendar yet — connect a database and add a few, or
              seed sample data with <code className="text-brick">npm run seed</code>.
            </p>
            <Link to="/events" className="btn-secondary mt-6 inline-flex">
              Browse events
            </Link>
          </div>
        ) : (
          <>
            {mine.length > 0 && (
              <div className="mb-16">
                <h2 className="font-display text-2xl font-medium text-ink mb-6">Your upcoming visits</h2>
                <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
                  {mine.map((event, i) => (
                    <EventCard key={event._id} event={event} rotate={i % 2 === 0 ? -1.5 : 1.5} />
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-medium text-ink">More activities to join</h2>
                <Link to="/events" className="text-brick font-semibold text-sm">View all →</Link>
              </div>
              <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
                {others.slice(0, 3).map((event, i) => (
                  <EventCard key={event._id} event={event} rotate={i % 2 === 0 ? 1.5 : -1.5} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
