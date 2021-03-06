import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../Header/Header";
import Body from "../../Body/Body";
import Banner from "../../Banner/Banner";

Home.propTypes = {};

function Home(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);
  return (
    <div class="container px-2 mx-auto">
      <Banner />
      <Body data={movies} />
    </div>
  );
}

export default Home;
