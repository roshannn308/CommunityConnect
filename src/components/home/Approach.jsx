import { FaHandsHelping, FaMobileAlt, FaMusic } from "react-icons/fa";

const pillars = [
  {
    icon: FaHandsHelping,
    title: "Companion visits",
    desc: "We match a volunteer with a resident based on language and interests, then keep the same pair meeting weekly — friendship needs repetition, not a rotating cast.",
    accent: "bg-banyan",
  },
  {
    icon: FaMobileAlt,
    title: "Digital literacy",
    desc: "Small, patient sessions on video calls, messaging, and safe UPI payments — taught by the same volunteer a resident already trusts.",
    accent: "bg-brick",
  },
  {
    icon: FaMusic,
    title: "Activities & events",
    desc: "Yoga, music evenings, storytelling, and festival celebrations run every week at partner homes, open to anyone who wants to join in.",
    accent: "bg-marigold",
  },
];

function Approach() {
  return (
    <section className="bg-paper py-24" id="programs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">How CommunityConnect works</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">
              Three habits, kept every week
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm leading-relaxed">
            None of this is a one-time event. The program is built around
            showing up on a schedule residents can count on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="bg-cream-card border border-line rounded-md p-8 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
            >
              <span className={`w-12 h-12 rounded-full ${accent} flex items-center justify-center text-paper text-xl mb-6`}>
                <Icon />
              </span>
              <h3 className="font-display text-2xl font-medium text-ink mb-3">{title}</h3>
              <p className="text-ink-soft leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
