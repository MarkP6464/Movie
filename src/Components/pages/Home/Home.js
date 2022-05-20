import React from "react";
import PropTypes from "prop-types";
import Header from "../../Header/Header";
import Body from "../../Body/Body";
import Banner from "../../Banner/Banner";

Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <div class="container px-2 mx-auto">
        <Banner />
        <Body />
      </div>
    </div>
  );
}

export default Home;
