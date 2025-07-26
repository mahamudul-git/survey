import logo from "/logo.png";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logOut();
    toast.success("Logged out successfully!");
    navigate("/");
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-2 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenuUnfoldLine className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Templates</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
              <li>
                <details>
                  <summary>Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <a className=" mr-20 text-xl font-bold flex items-center">
            <img src={logo} alt="Logo" className=" w-10 inline-block mr-2" />
            <span className="hidden md:block text-2xl">E-Survey</span>
          </a>
          <div className="hidden lg:block font-semibold ">
            <ul className="menu menu-horizontal  px-1 text-[15px]">
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Templates</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
              <li>
                <details>
                  <summary>Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <div className="hidden md:block">
            <TbWorld className="text-lg" />
          </div>
          <div className="hidden md:block">
            <p className="mx-4">Contact Sales</p>
          </div>
          {!user ? (
            <>
              <div className="hidden md:block">
                <Link to="/login" className="btn mr-3">Login</Link>
              </div>
              <Link to="/signup" className="btn bg-[#FFC107]">Sign Up Free</Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
