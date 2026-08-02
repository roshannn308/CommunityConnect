import PinCard from "../PinCard.jsx";

const scenes = [
  {
    title: "Sunday video calls",
    caption: "Volunteers help residents call family every week.",
    rotate: -3,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        <rect x="60" y="30" width="80" height="60" rx="6" className="fill-cream-card" stroke="var(--color-line)" />
        <circle cx="100" cy="52" r="14" className="fill-banyan" />
        <rect x="82" y="70" width="36" height="14" rx="7" className="fill-banyan" opacity="0.6" />
        <rect x="86" y="94" width="28" height="6" rx="3" className="fill-brick" />
      </svg>
    ),
  },
  {
    title: "Learning UPI, safely",
    caption: "Step-by-step, at whatever pace feels comfortable.",
    rotate: 2,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        <rect x="70" y="24" width="46" height="80" rx="8" className="fill-cream-card" stroke="var(--color-line)" />
        <rect x="80" y="36" width="26" height="46" rx="3" className="fill-marigold" opacity="0.85" />
        <circle cx="93" cy="94" r="4" className="fill-ink" opacity="0.5" />
        <path d="M120 60 L138 60 M132 52 L140 60 L132 68" className="stroke-brick" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Yoga on the lawn",
    caption: "Gentle morning sessions, twice a week.",
    rotate: -1.5,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        <circle cx="100" cy="50" r="14" className="fill-brick" opacity="0.8" />
        <path d="M100 64 L100 92 M100 78 L78 66 M100 78 L122 66 M100 92 L84 116 M100 92 L116 116" className="stroke-banyan" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Storytelling circle",
    caption: "Folk tales, memories, and a lot of laughter.",
    rotate: 3,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        {[68, 100, 132].map((cx, i) => (
          <circle key={cx} cx={cx} cy={i === 1 ? 60 : 70} r="16" className={i === 1 ? "fill-marigold" : "fill-banyan"} opacity="0.85" />
        ))}
      </svg>
    ),
  },
  {
    title: "Festival celebrations",
    caption: "Every home marks the seasons together.",
    rotate: -2.5,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        <g className="fill-marigold">
          <circle cx="50" cy="40" r="5" />
          <circle cx="90" cy="30" r="5" />
          <circle cx="130" cy="42" r="5" />
          <circle cx="160" cy="30" r="5" />
        </g>
        <path d="M40 90 Q100 50 170 90" stroke="var(--color-brick)" strokeWidth="3" fill="none" strokeDasharray="1 10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "New friendships",
    caption: "The same pair, meeting week after week.",
    rotate: 1,
    render: (
      <svg viewBox="0 0 200 140" className="w-full h-32">
        <rect x="0" y="0" width="200" height="140" className="fill-sand" />
        <circle cx="82" cy="58" r="18" className="fill-brick" opacity="0.8" />
        <circle cx="120" cy="58" r="18" className="fill-banyan" opacity="0.8" />
      </svg>
    ),
  },
];

function Moments() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">From the noticeboard</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">Moments that matter</h2>
          <p className="text-ink-soft mt-4 leading-relaxed">
            Snapshots from volunteer visits, learning sessions, and celebrations across
            our partner homes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
          {scenes.map((s) => (
            <PinCard key={s.title} rotate={s.rotate} className="rounded-sm !p-4">
              {s.render}
              <div className="pt-4 px-1 pb-1">
                <h3 className="font-display text-lg text-ink font-medium">{s.title}</h3>
                <p className="text-sm text-ink-soft mt-1">{s.caption}</p>
              </div>
            </PinCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Moments;
