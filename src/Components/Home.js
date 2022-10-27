import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import coder from "../assets/coding.json";
import { useContext } from "react";
import { AuthContext } from "./Context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl sm:leading-none">
              Welcome to
              <span className="inline-block text-blue-400 ml-1">
                Next Coder
              </span>
            </h2>
            <p className="text-justify text-blue-400 md:text-lg">
              If you want to learn programming, make this thing your number one
              priority. Every day you must read a few pages of your favorite
              Programming book or work on both personal or open-source projects
              that rely on Programming. Things don’t always go as planned but no
              matter what happens, you have to make steady progress everyday.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            {user && user.uid ? (
              <>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  <span className="mr-3">Get started</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  <span className="mr-3">Get started</span>
                </Link>{" "}
                <Link
                  to="/login"
                  aria-label=""
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <div className=" ">
            <Lottie animationData={coder} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
