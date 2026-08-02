import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(form.email, form.password);
      navigate(location.state?.from || "/dashboard", { replace: true });
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
          <h1 className="font-display text-3xl font-semibold text-ink text-center mb-2">Welcome back</h1>
          <p className="text-ink-soft text-center mb-8">Log in to manage your visits and events.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input id="password" name="password" type="password" required value={form.password} onChange={onChange} className="field" placeholder="••••••••" />
            </div>

            {error && <p className="text-brick text-sm font-medium">{error}</p>}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>

          <p className="text-center text-ink-soft mt-8">
            Don&rsquo;t have an account?{" "}
            <Link to="/register" className="text-brick font-semibold">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
