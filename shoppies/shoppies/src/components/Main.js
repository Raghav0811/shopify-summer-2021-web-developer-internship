import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Main = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [headerText, setHeaderText] = useState("Latest Releases");

  const getLatestMovies = async () => {
    const response = await axios(
      `http://www.omdbapi.com/?i=tt3896198&apikey=e695e9b0`
    );
    setResults(response.data.Search);
  };

  const getMovies = async (e) => {
    e.preventDefault();

    const response = await axios(
      `http://www.omdbapi.com/?i=${query}&apikey=e695e9b0`
    );

    if (response.data.Error) {
      setError(response.data.Error);
    } else {
      setResults(
        response.data.Search.map((movie) => {
          return {
            ...movie,
            nominated: false,
          };
        })
      );
      setHeaderText(`Results for "${query}"`);
      setError("");
    }
  };

  return (
    <div className="App">
      <Navbar query={query} getMovies={getMovies} />
    </div>
  );
};

export default Main;
