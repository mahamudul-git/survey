import { useContext, useMemo, useCallback, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigation } from "../../hooks/useNavigation.js";
import { toast } from "react-toastify";
import { RiMenuUnfoldLine, RiCloseLine } from "react-icons/ri";

// Navigation items configuration
const NAV_ITEMS = [
  {
    path: "/",
    label: "Home",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    path: "/earn-with-us",
    label: "Earn With Us",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    path: "/publish-survey",
    label: "My Surveys",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    path: "/resources",
    label: "Dashboard",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
  },
  {
    path: "/help-support",
    label: "Help & Support",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

// Reusable Icon component
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// Reusable NavLink component for desktop
const NavLink = ({ item, currentPath, className = "" }) => {
  const isActive = currentPath === item.path;
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium";
  const activeClasses = isActive ? 'text-white bg-slate-700/80' : 'text-slate-300 hover:text-white hover:bg-slate-700/80';
  
  return (
    <Link to={item.path} className={`${baseClasses} ${activeClasses} ${className}`}>
      <Icon path={item.icon} />
      <span>{item.label}</span>
    </Link>
  );
};

// Reusable MobileNavLink component
const MobileNavLink = ({ item, currentPath, onClick }) => {
  const isActive = currentPath === item.path;
  const baseClasses = "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium";
  const activeClasses = isActive ? 'text-white bg-slate-700/60' : 'text-slate-300 hover:text-white hover:bg-slate-700/40';
  
  return (
    <Link to={item.path} className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      <Icon path={item.icon} className="w-4 h-4" />
      <span>{item.label}</span>
    </Link>
  );
};

const Nav = () => {
  const { isMenuOpen, toggleMenu: contextToggleMenu, closeMenu } = useNavigation();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const handleLogout = useCallback(async () => {
    await logOut();
    toast.success("Logged out successfully!");
    navigate("/");
  }, [logOut, navigate]);

  const toggleMenu = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    contextToggleMenu();
  }, [contextToggleMenu]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Make sure the hamburger button is not included in the outside click detection
      const hamburgerButton = event.target.closest('button[aria-label*="menu"]');
      if (hamburgerButton) return;
      
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      // Use a small delay to prevent immediate closing
      const timer = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
      }, 100);
      
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'unset';
      };
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, closeMenu]);

  // Memoize the theme toggle button to avoid re-renders
  const ThemeToggleButton = useMemo(() => (
    <button className="p-2 rounded-full hover:bg-slate-700/50 transition-colors duration-200">
      <Icon 
        path="M20.354 15.354A9 9 0 718.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
        className="w-5 h-5 text-slate-400" 
      />
    </button>
  ), []);

  // Memoize navigation items with close menu functionality
  const navItems = useMemo(() => NAV_ITEMS.map(item => (
    <NavLink key={item.path} item={item} currentPath={location.pathname} />
  )), [location.pathname]);

  const mobileNavItems = useMemo(() => NAV_ITEMS.map(item => (
    <MobileNavLink key={item.path} item={item} currentPath={location.pathname} onClick={closeMenu} />
  )), [location.pathname, closeMenu]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[80] bg-slate-900/80 border-b border-slate-800/50"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      <nav className={`container mx-auto max-w-[1440px] flex items-center justify-between py-3 transition-all duration-300 ${isMenuOpen ? 'blur-sm  bg-black/30 brightness-75' : ''}`}>
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <div className="flex items-center">
            <Icon 
              path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              className="w-6 h-6 text-blue-400" 
            />
            <span className="text-lg font-bold ml-2"><span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  SurveySight
                </span></span>
          </div>
        </Link>

        <div className="hidden md:flex items-center bg-slate-800/40 rounded-full px-2 py-1 space-x-1 ">
          {navItems}
        </div>

        <div className="flex items-center space-x-3">
          {!user ? (
            <>
              {ThemeToggleButton}
              <Link to="/login" className="hidden md:inline-block border border-[#9767E4]/30 text-[#9767E4] hover:bg-[#9767E4]/10 bg-transparent px-5 py-2 rounded-full text-sm font-medium">
                Login
              </Link>
              <Link to="/signup" className="hidden md:inline-block bg-[#9767E4] hover:bg-[#8B5CF6] text-[#0F1729]  px-6 py-2 rounded-full font-medium text-sm">
                Sign Up
              </Link>
            </>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-slate-700/50 transition-colors duration-200">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <Link to="/Dashboard" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2">Dashboard</Link>
              <button onClick={handleLogout} className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2">Logout</button>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-600 hover:border-purple-500 transition-colors duration-200">
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
          className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-slate-400 hover:text-white transition-colors duration-200 relative z-[110]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 top-[12px]' : 'top-1'
            }`} />
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0 top-[12px]' : 'top-[12px]'
            }`} />
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 top-[12px]' : 'top-[23px]'
            }`} />
          </div>
        </button>
      </nav>

      {/* Overlay - Full screen blur */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] md:hidden transition-opacity duration-300 ease-in-out"
          onClick={closeMenu}
        />
      )}

      {/* Off-canvas Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-800/50 z-[100] md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '-8px 0 40px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800/50 bg-slate-800/30">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Icon 
              path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              className="w-5 h-5 text-blue-400" 
            />
            <span className="text-base font-bold "><span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  SurveySight
                </span></span>
          </Link>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Navigation Items */}
          <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
            {mobileNavItems}
          </div>

          {/* User Actions */}
          <div className="p-4 border-t border-slate-800/50 space-y-3 bg-slate-800/30 backdrop-blur-sm">
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="block w-full text-center border border-[#9767E4]/30 text-[#9767E4] hover:bg-[#9767E4]/10 bg-transparent px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block w-full text-center bg-[#9767E4] hover:bg-[#8B5CF6] text-[#0F1729] px-4 py-2.5 rounded-full font-medium text-sm transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-600">
                    <img
                      alt="User avatar"
                      src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{user.displayName || 'User'}</p>
                    <p className="text-slate-400 text-xs">{user.email}</p>
                  </div>
                </div>
                <Link 
                  to="/Dashboard" 
                  className="block w-full text-center text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2.5 rounded-lg transition-colors duration-200 text-sm"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="block w-full text-center text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
