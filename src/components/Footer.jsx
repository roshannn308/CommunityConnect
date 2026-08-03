import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-banyan-dark text-paper/90">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display font-semibold text-2xl text-paper">
          Care<span className="text-marigold">Connect</span>
          </span>
          <p className="mt-4 text-paper/70 max-w-sm leading-relaxed">
            We pair volunteers with elders in care homes for regular visits, digital
            literacy sessions, and recreational activities — because company is one
            of the few medicines that never runs out.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-paper mb-4 text-sm uppercase tracking-wide">
            Get involved
          </h3>
          <ul className="space-y-2.5 text-paper/70">
            <li><Link to="/volunteer" className="hover:text-marigold transition-colors">Become a volunteer</Link></li>
            <li><Link to="/partner" className="hover:text-marigold transition-colors">Register a care home</Link></li>
            <li><Link to="/events" className="hover:text-marigold transition-colors">Upcoming events</Link></li>
            <li><a href="/#voices" className="hover:text-marigold transition-colors">Stories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-paper mb-4 text-sm uppercase tracking-wide">
            Reach us
          </h3>
          <ul className="space-y-2.5 text-paper/70">
            <li>hello@careconnect.org</li>
            <li>+91 98765 43210</li>
            <li>Bengaluru, Karnataka</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-paper/60">
          <p>&copy; {new Date().getFullYear()} CareConnect. Built with care, not clicks.</p>
          <p className="flex items-center gap-1.5">
            Made for people who show up <FaHeart className="text-brick" size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
