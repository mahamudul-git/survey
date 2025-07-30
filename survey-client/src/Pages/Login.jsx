import { GoEyeClosed } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_BASE_URL } from "../utils/api";

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
        navigate("/");
        toast.success("Login successful!");
      })
      .catch((error) => {
        setError(error.message || "Login failed.");
      });
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative overflow-y-auto max-h-screen">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={() => navigate("/") }>&times;</button>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <span className="text-green-600 text-3xl">$</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 mb-6">
          <button className="text-[#347433] text-xl font-semibold border-b-2 border-[#347433] pb-1">Log in</button>
          <Link to="/signup" className="text-gray-500 text-xl font-semibold pb-1 focus:outline-none">Sign up</Link>
        </div>
        <button
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 flex items-center justify-center gap-2"
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
                navigate("/");
              }, 1200);
            } catch (error) {
              setError(error.message || "Google sign-in failed.");
            }
          }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> Continue with Google
        </button>
        <div className="flex items-center my-4"><span className="flex-1 h-px bg-gray-300" /><span className="mx-2 text-gray-400">or</span><span className="flex-1 h-px bg-gray-300" /></div>
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <label htmlFor="password" className="text-sm font-medium text-gray-700 text-left">Password</label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 w-full pr-10"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={0}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <GoEyeClosed /> : <FiEye />}
            </span>
          </div>
          {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
          <button type="submit" className="bg-[#347433] hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 mt-2">Log in</button>
        </form>
        <div className="mt-2 text-right">
          <a href="#" className="text-[#e91e63] text-sm">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;