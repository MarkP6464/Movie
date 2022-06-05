import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Filter from "../../Filter/Filter";
import Body from "../../Body/Body";
import { useLocation } from "react-router-dom";

FilterPage.propTypes = {};

function FilterPage(props) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080" + location.pathname + location.search)
      .then((response) => response.json())
      .then((data) => {
        !(data.length === 0) && setMovies(data);
        console.log(data);
      });
  }, []);
  return (
    <div class="container mx-auto mt-2 py-2 w-full">
      <h1>Phim</h1>
      <Filter />
      <Body data={movies} />
    </div>
  );
}

export default FilterPage;
