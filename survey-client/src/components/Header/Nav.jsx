import logo from "/logo.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <nav className="container mx-auto max-w-[1440px] flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <span className="text-2xl font-['Pacifico'] text-gray-800">SurveySight</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Home</Link>
          <Link to="/earn-with-us" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Earn with Us</Link>
          <Link to="/publish-survey" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Publish Survey</Link>
          <Link to="/resources" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Resources</Link>
          <Link to="/help-support" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Help & Support</Link>
        </div>

        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Sign In</Link>
              <Link to="/waitlist" className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-150 cursor-pointer whitespace-nowrap hover:scale-105">
                Join Waitlist
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/Dashboard" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Dashboard</Link>
              <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Logout</button>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img
                  alt="User avatar"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <button
          className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RiMenuUnfoldLine className="text-xl" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100/50 px-6 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Home</Link>
            <Link to="/earn-with-us" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Earn with Us</Link>
            <Link to="/publish-survey" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Publish Survey</Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Resources</Link>
            <Link to="/help-support" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">Help & Support</Link>
            {!user ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Sign In</Link>
                <Link to="/waitlist" className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-150 cursor-pointer whitespace-nowrap hover:scale-105">
                  Join Waitlist
                </Link>
              </>
            ) : (
              <>
                <Link to="/Dashboard" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Dashboard</Link>
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
