import { FaQuoteLeft } from "react-icons/fa";
import PinCard from "../PinCard.jsx";

const voices = [
  {
    name: "Lakshmi Devi",
    role: "Resident, Sunrise Home",
    quote: "My volunteer taught me video calls. Now I see my grandson every Sunday, not just on birthdays.",
    rotate: -2,
  },
  {
    name: "Rahul Kumar",
    role: "Volunteer since 2025",
    quote: "I show up thinking I'm giving an hour. I usually leave having learned more than I taught.",
    rotate: 1.5,
  },
  {
    name: "Anita Sharma",
    role: "Coordinator, Harmony Home",
    quote: "Scheduling used to be a spreadsheet nightmare. Now volunteers pick their own slots and just show up.",
    rotate: -1,
  },
];

function Voices() {
  return (
    <section className="bg-banyan-dark py-24" id="voices">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4 !text-marigold">In their words</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-paper">What people tell us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 pt-2">
          {voices.map((v) => (
            <PinCard key={v.name} rotate={v.rotate} className="rounded-sm">
              <FaQuoteLeft className="text-brick text-2xl mb-4" />
              <p className="font-display italic text-lg text-ink leading-relaxed">&ldquo;{v.quote}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-line">
                <p className="font-semibold text-ink">{v.name}</p>
                <p className="text-sm text-ink-soft">{v.role}</p>
              </div>
            </PinCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Voices;
