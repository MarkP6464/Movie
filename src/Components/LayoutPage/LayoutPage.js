import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

LayoutPage.propTypes = {};

function LayoutPage(props) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutPage;
