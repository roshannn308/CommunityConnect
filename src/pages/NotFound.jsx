import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 py-20 bg-paper">
        <p className="eyebrow mb-4">Page not found</p>
        <h1 className="font-display text-5xl sm:text-6xl font-semibold text-ink">
          Wrong turn on the way here
        </h1>
        <p className="text-ink-soft mt-5 max-w-md">
          This page doesn&rsquo;t exist — but there&rsquo;s always somewhere to be back on the noticeboard.
        </p>
        <Link to="/" className="btn-primary mt-9">
          Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
