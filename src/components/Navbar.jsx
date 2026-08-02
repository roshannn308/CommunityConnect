import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";

const links = [
  { to: "/#programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/partner", label: "For Care Homes" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 min-h-[4.5rem] flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="w-9 h-9 rounded-full bg-banyan flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 18c2-6 5-9 8-9s6 3 8 9"
                stroke="#F6EFDD"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="7" r="2.4" fill="#E8A33D" />
            </svg>
          </span>
          <span className="font-display font-semibold text-xl text-ink leading-none">
            Community<span className="text-brick">Connect</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-ink-soft">
          {links.map((l) => (
            <a key={l.label} href={l.to} className="hover:text-brick transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/dashboard" className="font-medium text-ink-soft hover:text-brick transition-colors">
                Hi, {user.name?.split(" ")[0]}
              </Link>
              <button onClick={logout} className="btn-secondary !py-2 !px-4 text-sm">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-medium text-ink-soft hover:text-brick transition-colors">
                Log in
              </Link>
              <Link to="/register" className="btn-primary !py-2.5 !px-5 text-sm">
                Join us
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-ink text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              onClick={() => setOpen(false)}
              className="py-2.5 font-medium text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <div className="h-px bg-line my-2" />
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="py-2.5 font-medium">
                Dashboard
              </Link>
              <button onClick={logout} className="btn-secondary mt-2 w-full">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="py-2.5 font-medium">
                Log in
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Join us
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
