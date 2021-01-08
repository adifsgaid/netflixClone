import React, { Component } from "react";
import "../../../assets/stylesheets/App.css";
import Row from "./Row";
import requests from "../../services/requests";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello adif</h1>
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now " fetchUrl={requests.fetchTrending} />
      </div>
    );
  }
}
export default App;
