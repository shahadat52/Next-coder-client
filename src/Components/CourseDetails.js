import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, description, picture, topics, duration, modules } =
    details;
  //
  return (
    <div className="flex justify-center h-full  ">
      <div className="cart-container ">
        <div className="flex justify-between my-3">
          <img className="w-12 h-10 rounded-full" src={picture} alt="" />
          <div className="uppercase text-3xl  font-bold">{name}</div>
          <div>
            <PDFDownloadLink
              document={<PDFFile>{details}</PDFFile>}
              filename="FORM"
            >
              {({ loading }) =>
                loading ? (
                  <button>Loading Document...</button>
                ) : (
                  <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                    Download
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
        <div>
          <img
            className="rounded-xl mx-auto course-img mb-4"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-bold">Course Duration:</span> {duration}{" "}
            <small>Hours</small>
          </div>
          <div>
            <span className="font-bold">Module:</span> {modules}
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold">Topics</p>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </div>
        <div>{description}</div>
        <div className="flex justify-between">
          <Link
            to="/courses"
            className=" my-5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              Back To Courses
            </span>
          </Link>

          <div className="my-5 ">
            <Link
              to={`/course/${name}`}
              className="relative  inline-flex items-center justify-center py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Get premium access
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
