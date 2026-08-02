import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeader from "../components/PageHeader.jsx";
import EventCard from "../components/EventCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

const fallbackEvents = [
  { _id: "f1", title: "Yoga & Wellness Session", date: "2026-08-30", location: "Sunrise Old Age Home", seatsTotal: 25, seatsFilled: 6, category: "Health" },
  { _id: "f2", title: "Digital Literacy Workshop", date: "2026-08-05", location: "Community Hall", seatsTotal: 40, seatsFilled: 18, category: "Digital" },
  { _id: "f3", title: "Music & Storytelling Evening", date: "2026-08-12", location: "Harmony Old Age Home", seatsTotal: 30, seatsFilled: 9, category: "Entertainment" },
  { _id: "f4", title: "Rangoli & Festival Prep", date: "2026-08-19", location: "Sunrise Old Age Home", seatsTotal: 20, seatsFilled: 20, category: "Entertainment" },
  { _id: "f5", title: "Smartphone Basics", date: "2026-08-22", location: "Community Hall", seatsTotal: 35, seatsFilled: 11, category: "Digital" },
  { _id: "f6", title: "Chair Yoga & Breathing", date: "2026-08-26", location: "Harmony Old Age Home", seatsTotal: 25, seatsFilled: 4, category: "Health" },
];

const rotations = [-2, 1.5, -1, 2, -1.5, 1];

function Events() {
  const [events, setEvents] = useState(fallbackEvents);
  const [isLive, setIsLive] = useState(false);
  const [joiningId, setJoiningId] = useState(null);
  const [notice, setNotice] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    api
      .get("/events")
      .then(({ data }) => {
        if (!cancelled && data?.events?.length) {
          setEvents(data.events);
          setIsLive(true);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const handleJoin = async (event) => {
    if (!user) {
      navigate("/login", { state: { from: "/events" } });
      return;
    }
    setJoiningId(event._id);
    setNotice("");
    try {
      const { data } = await api.post("/events/join", { eventId: event._id });
      setEvents((prev) => prev.map((e) => (e._id === event._id ? data.event : e)));
      setNotice(`You're in! See you at "${event.title}".`);
    } catch (err) {
      setNotice(err.message);
    } finally {
      setJoiningId(null);
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="This month's calendar"
        title="Upcoming activities"
        description="Every session is open to volunteers and, where noted, family visitors. Seats are limited so residents get real one-on-one time."
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        {notice && (
          <div className="mb-10 bg-cream-card border border-line rounded-md px-6 py-4 text-ink-soft">
            {notice}
          </div>
        )}
        {!isLive && (
          <p className="text-xs text-ink-soft/70 mb-10">
            Showing sample activities — connect a database to display live events.
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-x-6 gap-y-14">
          {events.map((event, i) => (
            <EventCard
              key={event._id}
              event={event}
              rotate={rotations[i % rotations.length]}
              onJoin={handleJoin}
              joining={joiningId === event._id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
