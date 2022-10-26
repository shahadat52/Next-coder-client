import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8192.jpg?w=996&t=st=1666768240~exp=1666768840~hmac=61552cc79fc05f5a8e698bfedaa4894190ff4d6d509d448614668bf8b7298f79")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Next Coder </h1>
            <p className="mb-5">
              Here you can learn programming. Next Coder is a popular learning
              platform for programming. We have many courses, If you want to
              develope your skill on programming so you can consider us
            </p>
            <Link to="/courses">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
