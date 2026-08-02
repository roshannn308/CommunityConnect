import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import api from "../../lib/api.js";

const initial = { name: "", email: "", message: "" };

function GetInvolved() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section className="bg-paper py-24" id="contact">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink">
            Questions before you sign up?
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <form onSubmit={onSubmit} className="md:col-span-3 bg-cream-card border border-line rounded-md p-8 space-y-5">
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className="field" placeholder="Your name" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} className="field" placeholder="How can we help?" />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-banyan font-medium">Thanks — we&rsquo;ll reply within a couple of days.</p>
            )}
            {status === "error" && <p className="text-brick font-medium">{error}</p>}
          </form>

          <div className="md:col-span-2 bg-banyan text-paper rounded-md p-8 space-y-7">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-marigold text-xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-paper/75">hello@communityconnect.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-marigold text-xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-paper/75">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-marigold text-xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-paper/75">Community Connect Centre, Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
