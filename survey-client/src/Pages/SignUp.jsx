import { ToastContainer, toast } from 'react-toastify';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_BASE_URL } from "../utils/api";

const SignUp = () => {
  const { createUser, logOut, signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [googleName, setGoogleName] = useState("");
  const [googlePhoto, setGooglePhoto] = useState("");

  useEffect(() => {
    if (user && user.name) {
      setGoogleName(user.name);
      setGooglePhoto(user.photoURL);
    }
  }, [user]);

  const handleSignUp = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value.trim();
    const profession = form.profession.value;
    const email = form.email.value.trim();
    const password = form.password.value;

    // Simple validation
    if (!name) {
      setError("Name is required.");
      return;
    }
    if (!profession) {
      setError("Profession is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then(async () => {
        try {
          await fetch(`${API_BASE_URL}/api/users/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              email,
              password,
              profession,
              role: "publisher"
            })
          });
        } catch (err) {
          // Optionally handle error
        }
        toast.success("Sign up successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        logOut(); // Log out after sign up
      })
      .catch((error) => {
        setError(error.message || "Sign up failed.");
      });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative overflow-y-auto max-h-screen">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={() => navigate("/")}>&times;</button>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <span className="text-green-600 text-3xl">$</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 mb-6">
          <Link to="/login" className="text-gray-500 text-xl font-semibold pb-1 focus:outline-none">Log in</Link>
          <button className="text-[#347433] text-xl font-semibold border-b-2 border-[#347433] pb-1">Sign up</button>
        </div>
        {/* <button
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 flex items-center justify-center gap-2"
          type="button"
          onClick={() => {
            signInWithGoogle()
              .then(() => {
                toast.success("Google sign-up successful!");
                setTimeout(() => {
                  navigate("/");
                }, 1200);
              })
              .catch((error) => {
                setError(error.message || "Google sign-up failed.");
              });
          }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> Continue with Google
        </button> */}
        <button
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 flex items-center justify-center gap-2"
          type="button"
          onClick={async () => {
            try {
              const result = await signInWithGoogle();
              const googleUser = result.user;
              // Show extra info form after Google signup
              setGoogleName(googleUser.displayName || "");
              setGooglePhoto(googleUser.photoURL || "");
              // Collect profession and role, then send to backend
              // You may want to show a modal or redirect to a profile completion page here
              // Example POST request:
              // await fetch(`${API_BASE_URL}/api/users/register`, {
              //   method: "POST",
              //   headers: { "Content-Type": "application/json" },
              //   body: JSON.stringify({
              //     uid: googleUser.uid,
              //     email: googleUser.email,
              //     name: googleUser.displayName,
              //     photoURL: googleUser.photoURL,
              //     profession,
              //     role: "surveyor"
              //   })
              // });
              toast.success("Sign up successful!");
              setTimeout(() => {
                navigate("/login");
              }, 1200);
            } catch (error) {
              setError(error.message || "Sign-up failed.");
            }
          }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> Continue with Google
        </button>
        <div className="flex items-center my-4"><span className="flex-1 h-px bg-gray-300" /><span className="mx-2 text-gray-400">or</span><span className="flex-1 h-px bg-gray-300" /></div>
        <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
          <label htmlFor="name" className="text-sm font-medium text-gray-700 text-left">Name</label>
          <input id="name" name="name" type="text" required placeholder="Enter your name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" value={googleName || undefined} onChange={e => setGoogleName(e.target.value)} />
          {/* Show photo if available */}
          {googlePhoto && <img src={googlePhoto} alt="Profile" className="w-12 h-12 rounded-full mb-2" />}
          <label htmlFor="profession" className="text-sm font-medium text-gray-700 text-left">Profession</label>
          <select id="profession" name="profession" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="">Select profession</option>
            <option value="student">Student</option>
            <option value="job">Job</option>
            <option value="freelancer">Freelancer</option>
            <option value="other">Other</option>
          </select>
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
          <button type="submit" className="bg-[#347433] hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 mt-2">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;