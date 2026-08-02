const items = [
  {
    tag: "Distance",
    title: "Fewer visitors than there used to be",
    desc: "Families move for work, and the calendar between visits stretches longer than anyone plans for.",
  },
  {
    tag: "Screens",
    title: "A phone that feels like a locked door",
    desc: "Video calls, UPI, and OTPs assume a comfort with screens that no one sat down to teach.",
  },
  {
    tag: "Afternoons",
    title: "Days without a reason to look forward",
    desc: "Without regular activity, afternoons blur together — and mood and health follow the same slope.",
  },
];

function Reality() {
  return (
    <section className="bg-sand py-24" id="reality">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">What we hear from care homes</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">
            The problem isn&rsquo;t a lack of care.
            <br />
            It&rsquo;s a lack of company.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-line border-t border-b border-line">
          {items.map((item) => (
            <div key={item.tag} className="grid sm:grid-cols-[8rem_1fr_1.4fr] gap-4 sm:gap-8 py-8 items-baseline">
              <span className="font-display text-brick text-lg italic">{item.tag}</span>
              <h3 className="font-display text-2xl text-ink font-medium">{item.title}</h3>
              <p className="text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reality;
