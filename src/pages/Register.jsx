import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "volunteer" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await register(form);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center px-5 py-16 bg-sand">
        <div className="bg-cream-card border border-line rounded-md w-full max-w-md p-8 sm:p-10">
          <h1 className="font-display text-3xl font-semibold text-ink text-center mb-2">Create an account</h1>
          <p className="text-ink-soft text-center mb-8">Track your visits, RSVPs, and hours in one place.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className="field" placeholder="Your name" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required minLength={8} value={form.password} onChange={onChange} className="field" placeholder="At least 8 characters" />
            </div>
            <div>
              <label className="label" htmlFor="role">I'm signing up as a</label>
              <select id="role" name="role" value={form.role} onChange={onChange} className="field">
                <option value="volunteer">Volunteer</option>
                <option value="coordinator">Care home coordinator</option>
              </select>
            </div>

            {error && <p className="text-brick text-sm font-medium">{error}</p>}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="text-center text-ink-soft mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-brick font-semibold">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
