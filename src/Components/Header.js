import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/coder.png";
import { AuthContext } from "./Context/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-700">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Next-Coder"
            title="Next-Coder"
            className="inline-flex items-center"
          >
            <img className="w-18 h-12 rounded-2xl " src={logo} alt="" />

            <span className="ml-2 text-2xl font-bold tracking-wide text-red-300 uppercase">
              Next-Coder
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex text-gray-200">
            <li>
              <NavLink
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="FAQ"
                title="FAQ"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                FAQ
              </NavLink>
            </li>
            {user && user.uid ? (
              <>
                <li>
                  <img
                    aria-label="FAQ"
                    title={user.displayName}
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </li>
                <li>
                  <NavLink
                    // to="/logout"
                    aria-label="logout"
                    title="Logout"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    aria-label="login"
                    title="Login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Next-Coder"
                        title="Next-Coder"
                        className="inline-flex items-center"
                      >
                        <Link
                          to="/"
                          aria-label="Next-Coder"
                          title="Next-Coder"
                          className="inline-flex items-center"
                        >
                          <img
                            className="w-18 h-12 rounded-2xl "
                            src={logo}
                            alt=""
                          />

                          <span className="ml-2 text-2xl font-bold tracking-wide text-red-300 uppercase">
                            Next-Coder
                          </span>
                        </Link>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          FAQ
                        </NavLink>
                      </li>

                      {user && user.uid ? (
                        <>
                          <li>
                            <img
                              aria-label="FAQ"
                              title={user.displayName}
                              className="w-10 rounded-full"
                              src={user.photoURL}
                              alt=""
                            />
                          </li>
                          <li>
                            <NavLink
                              // to="/logout"
                              aria-label="logout"
                              title="Logout"
                              className=" font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink
                              to="/login"
                              aria-label="login"
                              title="Login"
                              className={({ isActive }) =>
                                isActive
                                  ? "font-medium tracking-wide text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                  : "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                              }
                            >
                              Login
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
