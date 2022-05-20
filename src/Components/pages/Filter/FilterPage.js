import React from "react";
import PropTypes from "prop-types";
import Filter from "../../Filter/Filter";
import Body from "../../Body/Body";

FilterPage.propTypes = {};

function FilterPage(props) {
  return (
    <div class="container mx-auto mt-2 py-2 w-full">
      <h1>Phim</h1>
      <Filter />
      <Body />
    </div>
  );
}

export default FilterPage;
