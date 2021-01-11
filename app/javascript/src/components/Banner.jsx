import React, { useState, useEffect } from "react";
import "../../../assets/stylesheets/Banner.css";
import axios from "../../services/axios";
import requests from "../../services/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function shadowDescription(str, el) {
    return str?.length > el ? str.substr(0, el - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">List</button>
        </div>
        <h1 className="banner__description">
          {movie?.overview}
          {shadowDescription(movie?.overview, 350)}
        </h1>
      </div>
      <div className="banner__shadow" />
    </header>
  );
}

export default Banner;
