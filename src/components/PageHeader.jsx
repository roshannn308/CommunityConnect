function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="bg-sand border-b border-line py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        {eyebrow && <p className="eyebrow justify-center mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink">{title}</h1>
        {description && <p className="text-ink-soft mt-4 leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}

export default PageHeader;
