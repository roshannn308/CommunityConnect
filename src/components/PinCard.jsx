/**
 * PinCard — the site's signature element: a card styled like an index
 * card pinned to a community noticeboard. Used sparingly (events,
 * moments, voices) rather than as the default container everywhere.
 */
function PinCard({ rotate = 0, className = "", children, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={`pin-card rounded-sm p-7 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      {...rest}
    >
      <span className="pin-dot" aria-hidden="true" />
      {children}
    </Tag>
  );
}

export default PinCard;
