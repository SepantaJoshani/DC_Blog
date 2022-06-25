import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Header />
      {children}
    </>
  );
};

export default Layout;
