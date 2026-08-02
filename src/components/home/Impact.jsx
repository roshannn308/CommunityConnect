const stats = [
  { number: "500+", label: "Elders visited regularly" },
  { number: "120+", label: "Active volunteers" },
  { number: "80+", label: "Sessions run this year" },
  { number: "95%", label: "Say visits lifted their mood" },
];

function Impact() {
  return (
    <section className="bg-banyan py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-marigold pl-5">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-paper">{s.number}</p>
              <p className="text-paper/75 mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
