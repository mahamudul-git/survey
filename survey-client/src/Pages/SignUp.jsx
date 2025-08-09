import { ToastContainer, toast } from 'react-toastify';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_BASE_URL } from "../utils/api";
import { getAuth } from "firebase/auth";
import { 
  BarChart3, 
  FileText, 
  Plus, 
  Users, 
  ArrowRight, 
  Moon,
  Menu
} from "lucide-react";

const SignUp = () => {
  const { createUser, logOut, signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Remove Google user handling since we're simplifying the form
  }, [user]);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Simple validation
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUser(email, password);
      // Get UID from Firebase Auth
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const uid = currentUser ? currentUser.uid : undefined;
      await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid,
          name: "User", // Default name since we removed the name field
          email,
          password,
          profession: "unknown", // Default profession
          role: "publisher"
        })
      });
      toast.success("Sign up successful!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      logOut(); // Log out after sign up
    } catch (error) {
      setError(error.message || "Sign up failed.");
    }
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-white">
      

      {/* Main Content */}
      <main className="relative flex min-h-[calc(100vh-161px)] items-center justify-center  pt-32 md:pt-[150px] pb-[90px]">
        <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>
        
        <div className="w-full z-30 max-w-md">
          {/* Sign Up Form Container */}
          <div className="rounded-xl border border-[#222F44] bg-[#0e152553] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#F8FAFC] mb-1.5 tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-[#B3BDCC]">
                Enter your email and create a password to sign up
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSignUp}>
              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium text-[#F8FAFC]">
                  Email
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="name@example.com" 
                  className="w-full h-9 px-3 py-2 text-sm bg-transparent border border-[#222F44] rounded-xl text-[#F8FAFC] placeholder:text-[#B3BDCC] shadow-[0_1px_2px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4]" 
                />
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label htmlFor="password" className="text-sm font-medium text-[#F8FAFC]">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full h-9 px-3 py-2 text-sm bg-transparent border border-[#222F44] rounded-xl text-[#F8FAFC] placeholder:text-[#B3BDCC] shadow-[0_1px_2px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4] pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B3BDCC] hover:text-[#F8FAFC] transition-colors duration-200"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={0}
                    role="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <GoEyeClosed size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-3">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-[#F8FAFC]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full h-9 px-3 py-2 text-sm bg-transparent border border-[#222F44] rounded-xl text-[#F8FAFC] placeholder:text-[#B3BDCC] shadow-[0_1px_2px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4] pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B3BDCC] hover:text-[#F8FAFC] transition-colors duration-200"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    tabIndex={0}
                    role="button"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <GoEyeClosed size={16} /> : <FiEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              {/* Sign Up Button */}
              <button 
                type="submit" 
                className="w-full h-9 bg-[#9767E4] hover:bg-[#8B5CF6] text-white font-medium shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] mt-6 rounded-xl transition-colors"
              >
                Sign up
              </button>
            </form>
              
              {/* Divider */}
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#4B5563]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#0E1525] px-2 text-sm text-[#B3BDCC]">Or continue with</span>
                </div>
              </div>

            {/* Google Sign Up Button */}
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
                  toast.success("Google sign-up successful!");
                  setTimeout(() => {
                    navigate("/user-dashboard");
                  }, 1200);
                } catch (error) {
                  setError(error.message || "Google sign-up failed.");
                }
              }}
              className="w-full h-9 border border-[#222F44] bg-[#0B111E] text-[#F8FAFC] hover:bg-[#1A2332] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none">
                <path d="M14.9371 7.29411H14.4001V7.26644H8.40007V9.93311H12.1677C11.6181 11.4854 10.1411 12.5998 8.40007 12.5998C6.19107 12.5998 4.40007 10.8088 4.40007 8.59977C4.40007 6.39077 6.19107 4.59977 8.40007 4.59977C9.41973 4.59977 10.3474 4.98444 11.0537 5.61277L12.9394 3.72711C11.7487 2.61744 10.1561 1.93311 8.40007 1.93311C4.7184 1.93311 1.7334 4.91811 1.7334 8.59977C1.7334 12.2814 4.7184 15.2664 8.40007 15.2664C12.0817 15.2664 15.0667 12.2814 15.0667 8.59977C15.0667 8.15277 15.0207 7.71644 14.9371 7.29411Z" fill="#FFC107"/>
                <path d="M2.50195 5.49677L4.69229 7.10311C5.28495 5.63577 6.72029 4.59977 8.39995 4.59977C9.41962 4.59977 10.3473 4.98444 11.0536 5.61277L12.9393 3.72711C11.7486 2.61744 10.156 1.93311 8.39995 1.93311C5.83929 1.93311 3.61862 3.37877 2.50195 5.49677Z" fill="#FF3D00"/>
                <path d="M8.40082 15.2665C10.1228 15.2665 11.6875 14.6075 12.8705 13.5358L10.8072 11.7898C10.1378 12.2968 9.30582 12.5998 8.40082 12.5998C6.66682 12.5998 5.19449 11.4942 4.63982 9.95117L2.46582 11.6262C3.56915 13.7852 5.80982 15.2665 8.40082 15.2665Z" fill="#4CAF50"/>
                <path d="M14.9374 7.29378H14.4004V7.26611H8.40039V9.93278H12.1681C11.9041 10.6784 11.4244 11.3214 10.8057 11.7898L10.8067 11.7891L12.8701 13.5351C12.7241 13.6678 15.0671 11.9328 15.0671 8.59945C15.0671 8.15245 15.0211 7.71611 14.9374 7.29378Z" fill="#1976D2"/>
              </svg>
              Sign up with Google
            </button>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <span className="text-sm text-[#6B7280]">Already have an account? </span>
              <Link to="/login" className="text-sm text-[#9767E4] hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default SignUp;