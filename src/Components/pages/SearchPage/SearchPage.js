import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Search from "../../Search/Search";
import Body from "../../Body/Body";
import Filter from "../../Filter/Filter";
import { useLocation } from "react-router-dom";

SearchPage.propTypes = {};

function SearchPage(props) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(location.pathname + location.search)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);
  return (
    <div class="container px-2 mx-auto">
      <Filter />
      <Body />
    </div>
  );
}

export default SearchPage;
