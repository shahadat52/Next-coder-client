import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, description, picture } = details;
  // <Link to={`/course/${name}`}>Cheek Out</Link>
  return (
    <div className="flex justify-center h-screen ">
      <div>
        <div>
          <div>
            name
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>description</div>
        <div>button</div>
      </div>
    </div>
  );
};

export default CourseDetails;
