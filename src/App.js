import React from 'react';
import "./index.css";
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestruantMenu from './components/RestruantMenu';


const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restraunts/:id",
        element: <RestruantMenu />,
      }
    ]
  },
]);


export default appRouter;
