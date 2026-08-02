import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../lib/api.js";
import EventCard from "../EventCard.jsx";

const fallbackEvents = [
  { _id: "f1", title: "Yoga & Wellness Session", date: "2026-08-30", location: "Sunrise Old Age Home", seatsTotal: 25, seatsFilled: 6, category: "Health" },
  { _id: "f2", title: "Digital Literacy Workshop", date: "2026-08-05", location: "Community Hall", seatsTotal: 40, seatsFilled: 18, category: "Digital" },
  { _id: "f3", title: "Music & Storytelling Evening", date: "2026-08-12", location: "Harmony Old Age Home", seatsTotal: 30, seatsFilled: 9, category: "Entertainment" },
];

const rotations = [-2, 1.5, -1];

function UpcomingEvents() {
  const [events, setEvents] = useState(fallbackEvents);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    api
      .get("/events")
      .then(({ data }) => {
        if (!cancelled && data?.events?.length) {
          setEvents(data.events.slice(0, 3));
          setIsLive(true);
        }
      })
      .catch(() => {
        // Fine to stay on fallbackEvents — the API may not be configured yet.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-sand py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">On the noticeboard</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">
              Join an activity this month
            </h2>
          </div>
          <Link to="/events" className="btn-secondary shrink-0">
            View full calendar
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-6 gap-y-10 pt-2">
          {events.map((event, i) => (
            <EventCard key={event._id} event={event} rotate={rotations[i % rotations.length]} />
          ))}
        </div>

        {!isLive && (
          <p className="text-xs text-ink-soft/70 mt-10 text-center">
            Showing sample activities — connect a database to display live events.
          </p>
        )}
      </div>
    </section>
  );
}

export default UpcomingEvents;
