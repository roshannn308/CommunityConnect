import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeader from "../components/PageHeader.jsx";
import api from "../lib/api.js";

const initial = {
  name: "",
  email: "",
  phone: "",
  city: "",
  availability: "Weekday afternoons",
  motivation: "",
};

function Volunteer() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await api.post("/volunteers", form);
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  if (status === "sent") {
    return (
      <>
        <Navbar />
        <PageHeader eyebrow="Application received" title="Thank you for stepping up" />
        <div className="max-w-xl mx-auto px-5 sm:px-8 py-20 text-center">
          <p className="text-ink-soft leading-relaxed">
            A coordinator will reach out within a few days to match you with a care
            home nearby and get you scheduled for orientation.
          </p>
          <button onClick={() => setStatus("idle")} className="btn-secondary mt-8">
            Submit another application
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Volunteer with us"
        title="Become a volunteer"
        description="Tell us a bit about yourself. Most volunteers commit to one visit a week — pick whatever pace fits your schedule."
      />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
        <form onSubmit={onSubmit} className="bg-cream-card border border-line rounded-md p-8 sm:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className="field" placeholder="Your name" />
            </div>
            <div>
              <label className="label" htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" required value={form.phone} onChange={onChange} className="field" placeholder="+91 ..." />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="city">City</label>
              <input id="city" name="city" required value={form.city} onChange={onChange} className="field" placeholder="Bengaluru" />
            </div>
          </div>

          <div>
            <label className="label" htmlFor="availability">When are you usually free?</label>
            <select id="availability" name="availability" value={form.availability} onChange={onChange} className="field">
              <option>Weekday mornings</option>
              <option>Weekday afternoons</option>
              <option>Weekday evenings</option>
              <option>Weekends</option>
            </select>
          </div>

          <div>
            <label className="label" htmlFor="motivation">Why do you want to volunteer?</label>
            <textarea id="motivation" name="motivation" required rows={4} value={form.motivation} onChange={onChange} className="field" placeholder="A sentence or two is plenty." />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
            {status === "sending" ? "Submitting…" : "Register as volunteer"}
          </button>

          {status === "error" && <p className="text-brick font-medium text-sm">{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Volunteer;
