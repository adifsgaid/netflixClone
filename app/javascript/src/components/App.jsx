import React, { Component } from "react";
import "../../../assets/stylesheets/App.css";
import Row from "./Row";
import requests from "../../services/requests";
import Banner from "./Banner";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    );
  }
}
export default App;
