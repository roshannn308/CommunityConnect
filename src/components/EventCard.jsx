import { FaCalendarAlt, FaMapMarkerAlt, FaChair } from "react-icons/fa";
import PinCard from "./PinCard.jsx";

const categoryColor = {
  Health: "bg-banyan",
  Digital: "bg-brick",
  Entertainment: "bg-marigold",
};

function EventCard({ event, rotate = 0, onJoin, joining }) {
  const seatsLeft = Math.max(event.seatsTotal - (event.seatsFilled ?? 0), 0);
  const full = seatsLeft === 0;

  return (
    <PinCard rotate={rotate} className="rounded-sm flex flex-col">
      <span
        className={`inline-flex w-fit text-xs font-semibold px-3 py-1 rounded-full text-paper mb-5 ${
          categoryColor[event.category] ?? "bg-ink"
        }`}
      >
        {event.category}
      </span>

      <h3 className="font-display text-xl font-medium text-ink mb-4">{event.title}</h3>

      <div className="space-y-2.5 text-sm text-ink-soft mb-6">
        <p className="flex items-center gap-2.5">
          <FaCalendarAlt className="text-brick shrink-0" />
          {new Date(event.date).toLocaleDateString(undefined, {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </p>
        <p className="flex items-center gap-2.5">
          <FaMapMarkerAlt className="text-brick shrink-0" />
          {event.location}
        </p>
        <p className="flex items-center gap-2.5">
          <FaChair className="text-brick shrink-0" />
          {full ? "Fully booked" : `${seatsLeft} of ${event.seatsTotal} seats open`}
        </p>
      </div>

      {onJoin && (
        <button
          onClick={() => onJoin(event)}
          disabled={full || joining}
          className="btn-primary mt-auto w-full !py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {full ? "Fully booked" : joining ? "Joining…" : "Join this event"}
        </button>
      )}
    </PinCard>
  );
}

export default EventCard;
