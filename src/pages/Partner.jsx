import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHeader from "../components/PageHeader.jsx";
import api from "../lib/api.js";

const initial = {
  homeName: "",
  contactPerson: "",
  phone: "",
  email: "",
  city: "",
  residentCount: "",
  message: "",
};

function Partner() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await api.post("/partners", form);
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
        <PageHeader eyebrow="Request received" title="We'll be in touch soon" />
        <div className="max-w-xl mx-auto px-5 sm:px-8 py-20 text-center">
          <p className="text-ink-soft leading-relaxed">
            A coordinator will contact you within a week to understand your residents&rsquo;
            needs and plan your first sessions.
          </p>
          <button onClick={() => setStatus("idle")} className="btn-secondary mt-8">
            Submit another request
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
        eyebrow="For care homes"
        title="Bring CommunityConnect to your home"
        description="We work with old age homes and community centres to run regular volunteer visits, digital literacy sessions, and activities — at no cost to residents."
      />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
        <form onSubmit={onSubmit} className="bg-cream-card border border-line rounded-md p-8 sm:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="homeName">Home / organisation name</label>
              <input id="homeName" name="homeName" required value={form.homeName} onChange={onChange} className="field" placeholder="Sunrise Old Age Home" />
            </div>
            <div>
              <label className="label" htmlFor="contactPerson">Contact person</label>
              <input id="contactPerson" name="contactPerson" required value={form.contactPerson} onChange={onChange} className="field" placeholder="Your name" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" required value={form.phone} onChange={onChange} className="field" placeholder="+91 ..." />
            </div>
            <div>
              <label className="label" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="field" placeholder="contact@home.org" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="city">City</label>
              <input id="city" name="city" required value={form.city} onChange={onChange} className="field" placeholder="Bengaluru" />
            </div>
            <div>
              <label className="label" htmlFor="residentCount">Approx. number of residents</label>
              <input id="residentCount" name="residentCount" type="number" min="1" value={form.residentCount} onChange={onChange} className="field" placeholder="40" />
            </div>
          </div>

          <div>
            <label className="label" htmlFor="message">What kind of support are you looking for?</label>
            <textarea id="message" name="message" required rows={4} value={form.message} onChange={onChange} className="field" placeholder="Companion visits, digital literacy, activities…" />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
            {status === "sending" ? "Submitting…" : "Request a partnership"}
          </button>

          {status === "error" && <p className="text-brick font-medium text-sm">{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Partner;
