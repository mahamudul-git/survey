import { GoEyeClosed } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_BASE_URL } from "../utils/api";
import Nav from "../components/Header/Nav";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    signIn(email, password)
      .then(() => {
        navigate("/dashboard");
        toast.success("Login successful!");
      })
      .catch((error) => {
        setError(error.message || "Login failed.");
      });
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Nav />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20">
        <div className="max-w-md w-full space-y-8">
          {/* Login Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Log in</h2>
              <p className="text-slate-400">Enter your email and password to access your account</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9767E4] focus:border-transparent transition-all duration-200 pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <GoEyeClosed size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9767E4] to-[#26B2F2] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Log in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-slate-600/50"></div>
              <span className="px-4 text-slate-400 text-sm">Or continue with</span>
              <div className="flex-1 h-px bg-slate-600/50"></div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={async () => {
                try {
                  const result = await signInWithGoogle();
                  const googleUser = result.user;
                  // Register user in backend if not exists
                  await fetch(`${API_BASE_URL}/api/users/google`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      uid: googleUser.uid,
                      name: googleUser.displayName,
                      email: googleUser.email,
                      photoURL: googleUser.photoURL,
                      profession: "unknown",
                      role: "surveyor"
                    })
                  });
                  toast.success("Google sign-in successful!");
                  setTimeout(() => {
                    navigate("/dashboard");
                  }, 1200);
                } catch (error) {
                  setError(error.message || "Google sign-in failed.");
                }
              }}
              className="w-full bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/50 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
            >
              <FaGoogle className="text-lg" />
              Sign in with Google
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-slate-400">Don't have an account? </span>
              <Link 
                to="/signup" 
                className="text-[#9767E4] hover:text-[#8B5CF6] font-medium transition-colors duration-200"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;