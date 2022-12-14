import { createBrowserRouter } from "react-router-dom";
import CheekOut from "../CheekOut";
import Course from "../Course";
import Blog from "../Blog/Blog";
import CourseDetails from "../CourseDetails";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage";
import FAQ from "../FAQ/FAQ";
import Home from "../Home";
import Login from "../Login";
import Main from "../Main";
import Register from "../Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/courses",
        loader: () => fetch("https://next-coder-server.vercel.app/courses"),
        element: <Courses />,
      },
      { path: "/blog", element: <Blog /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/faq", element: <FAQ /> },
      {
        path: "option/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://next-coder-server.vercel.app/option/${params.id}`
          );
        },
        element: <CourseDetails />,
      },
      {
        path: "course/:name",
        loader: async ({ params }) => {
          return fetch(
            `https://next-coder-server.vercel.app/course/${params.name}`
          );
        },
        element: (
          <PrivateRoute>
            <CheekOut />
          </PrivateRoute>
        ),
      },
      { index: true, element: <Home /> },
    ],
  },
]);
