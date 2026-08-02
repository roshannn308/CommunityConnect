import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PorchIllustration from "./PorchIllustration.jsx";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">A visiting program for local care homes</p>

          <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] font-semibold text-ink">
            Good company
            <br />
            is good medicine.
          </h1>

          <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
            CommunityConnect pairs volunteers with elders for regular visits, teaches
            digital skills like video calls and UPI, and fills the week with music,
            games, and celebrations worth looking forward to.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/volunteer" className="btn-primary">
              Become a volunteer
            </Link>
            <Link to="/events" className="btn-secondary">
              See this week&rsquo;s activities
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-ink-soft">
            <div>
              <p className="font-display text-2xl text-ink font-semibold">120+</p>
              <p>active volunteers</p>
            </div>
            <div className="w-px h-8 bg-line" />
            <div>
              <p className="font-display text-2xl text-ink font-semibold">18</p>
              <p>partner care homes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <PorchIllustration className="w-full h-auto max-w-md mx-auto" />

          <div
            className="pin-card rounded-sm px-5 py-4 absolute -left-2 top-4 hidden sm:block w-44"
            style={{ transform: "rotate(-6deg)" }}
          >
            <span className="pin-dot" aria-hidden="true" />
            <p className="font-display text-xl font-semibold text-ink">95%</p>
            <p className="text-xs text-ink-soft mt-1">of residents say weekly visits lifted their mood</p>
          </div>

          <div
            className="pin-card rounded-sm px-5 py-4 absolute -right-3 bottom-8 hidden sm:block w-48"
            style={{ transform: "rotate(4deg)" }}
          >
            <span className="pin-dot" aria-hidden="true" />
            <p className="text-sm text-ink-soft leading-snug">
              &ldquo;I finally video-call my grandson every Sunday.&rdquo;
            </p>
            <p className="text-xs font-semibold text-brick mt-2">— Lakshmi, 74</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
