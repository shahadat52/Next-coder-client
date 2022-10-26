import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course";

const Courses = () => {
  const courses = useLoaderData();
  // const { name, id } = courses;
  console.log(courses);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 h-full bg-slate-600">
        <h1 className="text-center text-3xl my-7 font-bold  text-slate-200  ">
          Courses Options
        </h1>
        <div className="mb-5">
          {courses.map((course) => (
            <p className="py-5 font-bold mb-4 text-center bg-slate-700 text-gray-300 rounded-lg ">
              <Link to={`/option/${course.id}`}>
                <span className="">{course.name}</span>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className=" col-span-3 grid grid-cols-3  gap-10 mt-10 ml-5">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
