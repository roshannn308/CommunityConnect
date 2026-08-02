function PorchIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 480"
      className={className}
      role="img"
      aria-label="An illustration of a volunteer and an elder sitting together on a porch bench, sharing tea, with a plant and warm sun beside them."
    >
      {/* sun */}
      <circle cx="410" cy="90" r="58" className="fill-marigold" opacity="0.9" />
      <g className="stroke-marigold" strokeWidth="4" strokeLinecap="round" opacity="0.55">
        <line x1="410" y1="10" x2="410" y2="-6" />
        <line x1="474" y1="34" x2="486" y2="24" />
        <line x1="486" y1="90" x2="502" y2="90" />
      </g>

      {/* ground */}
      <rect x="0" y="404" width="520" height="76" className="fill-sand" />
      <rect x="0" y="404" width="520" height="6" className="fill-line" />

      {/* potted plant */}
      <g transform="translate(52,300)">
        <path d="M10 90 L100 90 L92 150 L18 150 Z" className="fill-brick" />
        <rect x="8" y="82" width="94" height="12" rx="3" className="fill-brick" opacity="0.85" />
        <g className="fill-banyan">
          <ellipse cx="55" cy="46" rx="15" ry="34" transform="rotate(-18 55 46)" />
          <ellipse cx="30" cy="58" rx="13" ry="30" transform="rotate(-42 30 58)" />
          <ellipse cx="80" cy="58" rx="13" ry="30" transform="rotate(30 80 58)" />
          <ellipse cx="55" cy="70" rx="12" ry="26" />
        </g>
      </g>

      {/* bench */}
      <g transform="translate(150,318)">
        <rect x="0" y="70" width="260" height="14" rx="4" className="fill-ink" opacity="0.85" />
        <rect x="10" y="86" width="14" height="34" className="fill-ink" opacity="0.85" />
        <rect x="236" y="86" width="14" height="34" className="fill-ink" opacity="0.85" />
        <rect x="0" y="0" width="14" height="72" rx="4" className="fill-ink" opacity="0.85" />
      </g>

      {/* elder figure */}
      <g transform="translate(196,214)">
        <path d="M6 122 C2 90 6 66 30 58 C58 48 78 66 76 96 L74 122 Z" className="fill-marigold" />
        <circle cx="42" cy="34" r="26" className="fill-brick" opacity="0.35" />
        <circle cx="42" cy="30" r="22" fill="#EFD9B4" />
        <path d="M18 22 C18 4 66 4 66 22 C66 12 58 8 42 8 C26 8 18 14 18 22Z" className="fill-ink-soft" />
        <path d="M20 96 C34 108 52 108 66 96" stroke="#8a5a35" strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>

      {/* volunteer figure */}
      <g transform="translate(300,204)">
        <path d="M8 130 C2 92 10 64 40 56 C72 47 96 68 92 100 L90 130 Z" className="fill-banyan" />
        <circle cx="48" cy="34" r="24" fill="#C98A54" />
        <path d="M22 24 C22 4 76 4 76 26 C70 16 60 12 48 12 C36 12 26 16 22 24Z" className="fill-ink" />
        <path d="M24 98 C38 112 58 112 74 98" stroke="#5b3a22" strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>

      {/* tea cups on a small table */}
      <g transform="translate(255,330)">
        <ellipse cx="30" cy="46" rx="34" ry="8" className="fill-ink" opacity="0.15" />
        <rect x="12" y="0" width="10" height="40" className="fill-ink" opacity="0.7" />
        <rect x="40" y="0" width="10" height="40" className="fill-ink" opacity="0.7" />
        <ellipse cx="30" cy="0" rx="30" ry="7" className="fill-cream-card" stroke="var(--color-line)" />
        <circle cx="16" cy="-2" r="7" fill="#fff" stroke="var(--color-line)" />
        <circle cx="44" cy="-2" r="7" fill="#fff" stroke="var(--color-line)" />
      </g>
    </svg>
  );
}

export default PorchIllustration;
